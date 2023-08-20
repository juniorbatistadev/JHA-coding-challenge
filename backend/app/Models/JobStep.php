<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobStep extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_hazard_analysis_id',
        'title',
        'hazards',
        'controls'
    ];

    
    public function  jobHazardAnalysis()
    {
        return $this->belongsTo(JobHazardAnalysis::class);
    }
}
