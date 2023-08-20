<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\JobStep;
use App\Http\Requests\StoreJobStepRequest;
use App\Http\Requests\UpdateJobStepRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\JobStepResource;
use App\Http\Resources\V1\JobStepCollection;

class JobStepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JobStepCollection(JobStep::paginate(10));
    }

  

    public function byJobHazardAnalysis($jobHazardAnalysisId)
    {
        return new JobStepCollection(JobStep::where('job_hazard_analysis_id', $jobHazardAnalysisId)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreJobStepRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreJobStepRequest $request)
    {
        return  new JobStepResource (JobStep::create($request->all()));

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobStep  $jobStep
     * @return \Illuminate\Http\Response
     */
    public function show(JobStep $jobStep)
    {
        return new JobStepResource($jobStep);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\JobStep  $jobStep
     * @return \Illuminate\Http\Response
     */
   
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateJobStepRequest  $request
     * @param  \App\Models\JobStep  $jobStep
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateJobStepRequest $request, JobStep $jobStep)
    {
        $jobStep->update($request->all());
        return new JobStepResource($jobStep);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobStep  $jobStep
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobStep $jobStep)
    {
        $jobStep->delete();
        return response()->json(null, 204);
    }
}
