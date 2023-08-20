<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobHazardAnalysis extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author'
    ];


    public function  jobSteps()
    {
        return $this->hasMany(JobStep::class);
    }
}
