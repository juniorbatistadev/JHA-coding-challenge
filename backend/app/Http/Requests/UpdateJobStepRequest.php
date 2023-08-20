<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJobStepRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => ['required'],
            'jobHazardAnalysisId' => ['required'],
            'hazards' => ['required'],
            'controls' => ['required'],
        ];
    }

    protected function prepareForvalidation(){
        $this->merge([
            'job_hazard_analysis_id' => (int) $this->jobHazardAnalysisId,
        ]);
    }
}
