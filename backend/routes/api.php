<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\JobStepController;
use App\Http\Controllers\Api\V1\JobHazardAnalysisController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function(){
    Route::apiResource('job-steps', App\Http\Controllers\Api\V1\JobStepController::class);
    Route::get('job-hazard-analyses/{jobHazardAnalysisId}/job-steps', 'JobStepController@byJobHazardAnalysis');
    Route::apiResource('job-hazard-analyses', App\Http\Controllers\Api\V1\JobHazardAnalysisController::class);
});
