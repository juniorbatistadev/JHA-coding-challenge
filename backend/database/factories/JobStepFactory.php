<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\JobHazardAnalysis;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobStep>
 */
class JobStepFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'job_hazard_analysis_id' => JobHazardAnalysis::factory(),
            'hazards' => $this->faker->sentence(),
            'controls' => $this->faker->sentence(),
        ];
    }
}
