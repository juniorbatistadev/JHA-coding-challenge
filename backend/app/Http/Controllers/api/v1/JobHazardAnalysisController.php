<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\JobHazardAnalysis;
use App\Http\Requests\StoreJobHazardAnalysisRequest;
use App\Http\Requests\UpdateJobHazardAnalysisRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\JobHazardAnalysisResource;
use App\Http\Resources\V1\JobHazardAnalysisCollection;

class JobHazardAnalysisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return new JobHazardAnalysisCollection(JobHazardAnalysis::paginate(10));
    }

   
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreJobHazardAnalysisRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreJobHazardAnalysisRequest $request)
    {
        return new JobHazardAnalysisResource( JobHazardAnalysis::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobHazardAnalysis  $jobHazardAnalysis
     * @return \Illuminate\Http\Response
     */
    public function show(JobHazardAnalysis $jobHazardAnalysis)
    {
        return new JobHazardAnalysisResource($jobHazardAnalysis);
    }

  

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateJobHazardAnalysisRequest  $request
     * @param  \App\Models\JobHazardAnalysis  $jobHazardAnalysis
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateJobHazardAnalysisRequest $request, JobHazardAnalysis $jobHazardAnalysis)
    {
        $jobHazardAnalysis->update($request->all());
        return new JobHazardAnalysisResource($jobHazardAnalysis);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobHazardAnalysis  $jobHazardAnalysis
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobHazardAnalysis $jobHazardAnalysis)
    {
        //
    }
}
