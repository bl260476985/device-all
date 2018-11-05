<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Utils\PushStatusChange;

class PushStatusCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'push:status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'push status change';

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
    public function __construct(PushStatusChange $collect)
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
