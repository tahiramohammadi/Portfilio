<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Social_linkController;
use App\Http\Controllers\experienceController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\BlogController;
use App\Models\User;
use Illuminate\Validation\ValidationException;
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




Route::resource('education', EducationController::class)->only(['index']);
Route::resource('projects', ProjectController::class)->only(['index']);
Route::resource('abouts', AboutController::class)->only(['index']);
Route::resource('experiences', ExperienceController::class)->only(['index']);
Route::resource('social-links', Social_linkController::class)->only(['index']);
Route::resource('blogs', BlogController::class)->only(['index']);
Route::resource('messages', MessageController::class)->only(['index']);
Route::resource('contacts', ContactController::class)->only(['index', 'store']);



Route::middleware('auth:sanctum')->group(function () {
    Route::resource('education', EducationController::class)->only(['store', 'destroy']);
    Route::resource('projects', ProjectController::class)->only(['store', 'destroy']);
    Route::resource('abouts', AboutController::class)->only(['store', 'destroy']);
    Route::resource('experiences', ExperienceController::class)->only(['store']);
    Route::resource('social-links', Social_linkController::class)->only(['store', 'destroy']);
    Route::resource('blogs', BlogController::class)->only(['store', 'destroy']);
    Route::resource('contacts', ContactController::class)->only(['destroy']);
    Route::resource('messages', MessageController::class)->only(['store']); // A protected 'store' method is unusual for messages, but if you want it protected, put it here.
});