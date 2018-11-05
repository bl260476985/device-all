<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Utils\DeviceStatusChange;

class DeviceStatusCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'device:status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'device status change';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $collect;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(DeviceStatusChange $collect)
    {
        parent::__construct();
        $this->collect = $collect;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->collect->statusChange();
    }
}
