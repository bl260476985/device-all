<?php

namespace App\Http\Controllers\Admin\V1\File;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Session;
use Illuminate\Support\Facades\DB;
use App\Imports\DevicesImport;
use Excel;
use Illuminate\Support\Facades\Storage;


class FileImportController extends Controller
{
    /**上传图片
     * @param Request $req
     * @return
     */
    public function uploadFile(Request $req)
    {
        $pic_id = 0;
        if (!$req->hasFile('file_label')) {
            return $this->fail('缺少文件参数');
        }
        $file = $req->file('file_label');
        if (!empty($file)) {
            $year_m = date('Y-m-d');
            $array = explode('-', $year_m);
            $folder = $array[0] . '/' . $array[1] . '/' . $array[2];
            $dirpath = base_path() . '/public/uploads/' . $folder;
            $this->createFolder($dirpath);
            $realPath = $file->getRealPath();//临时文件的绝对路径
            $extension = $file->getClientOriginalExtension();//原始文件的后缀名
            $newName = date('YmdHis') . mt_rand(100, 999) . '.' . $extension;
            $path = $file->move($dirpath, $newName);
            $filepath = 'uploads/' . $folder . '/' . $newName;
            if ($path) {
                $pic_id = parent::getUid();
                $insert = [
                    'id' => $pic_id,
                    'url' => $filepath,
                    'type' => 2
                ];
                DB::table('device_pic')->insert($insert);
            }
        } else {
            return $this->fail('文件上传失败');
        }
        if (empty($pic_id)) {
            $this->fail('文件上传失败');
        }
        return $this->success(['file_id' => $pic_id]);
    }

    /**
     * 创建目录
     * @param $path
     */
    public function createFolder($path)
    {
        if (!file_exists($path)) {
            $this->createFolder(dirname($path));
            mkdir($path, 0777);
        }
    }

    /**
     *
     */
    public function deviceImport(Request $req)
    {
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['station_id']) || empty($data['station_id'])) {
            return $this->fail('缺少设备组参数');
        }
        if (!isset($data['manufacturer_id']) || empty($data['manufacturer_id'])) {
            return $this->fail('缺少设备制造商参数');
        }
        if (!isset($data['file_id']) || empty($data['file_id'])) {
            return $this->fail('缺少文件编号参数');
        }
        $station_id = (int)$data['station_id'];
        $manufacturer_id = (int)$data['manufacturer_id'];
        $file_id = $data['file_id'];
        $station = DB::table('station')->select('id', 'name', 'country_id', 'province_id', 'city_id', 'district_id', 'province', 'city', 'district', 'address', 'longitude', 'latitude')->where('id', $station_id)->where('is_del', 0)->first();
        if (empty($station)) {
            return $this->fail('设备组不存在');
        }
        $file = DB::table('device_pic')->select('id', 'url')->where('id', $file_id)->first();
        if (empty($file)) {
            return $this->fail('文件信息不存在');
        }
        $real_path = public_path('/') . $file['url'];
        if (!file_exists($real_path)) {
            return $this->fail('文件不存在');
        }
        $deviceImport = new DevicesImport($station, $manufacturer_id);
        //Excel::import  toCollection
        Excel::import($deviceImport, $file['url']);
        //获取有差异的数据
        $result['repeat'] = $deviceImport->getrepeat();
        return $this->success($result);
    }
}