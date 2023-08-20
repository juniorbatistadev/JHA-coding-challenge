<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\JobHazardAnalysis;

class JobHazardAnalysisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JobHazardAnalysis::factory()
            ->count(10)
            ->hasJobSteps(3)
            ->create();

        JobHazardAnalysis::factory()
            ->count(10)
            ->hasJobSteps(5)
            ->create();
            
    }
}
