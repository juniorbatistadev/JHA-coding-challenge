<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class JobStepResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return 
            [
            'id'=> $this->id,
            'title'=> $this->title,
            'jobHazardAnalysisId' => $this->job_hazard_analysis_id,
            'hazards' => $this->hazards,
            'controls' => $this->controls,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at
            ]
        ;
    }
}
