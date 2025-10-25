<?php

namespace App\Http\Controllers;
use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller



{

    public function __construct()
    {
        // Protect the 'store' and 'destroy' methods
        $this->middleware('auth:sanctum')->only(['store', 'destroy']);
    }


    public function index()
    {
        $educations = Education::all();
        return response()->json($educations); // Return data as JSON
    }








    public function store(Request $request)
{
    $request->validate([
        'degree' => 'required|string',
        'institute' => 'required|string',
        'from_year' => 'required|integer',
        'to_year' => 'required|integer',
        'field_of_study' => 'required|string',
        'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'description' => 'required|string',

    ]);

    $logoPath = null;
    
    if ($request->hasFile('logo')) {
        $logoPath = $request->file('logo')->store('images', 'public'); // Store in storage/app/public/logos
    }

    $education = Education::create([
        'degree' => $request->degree,
        'institute' => $request->institute,
        'from_year' => $request->from_year,
        'to_year' => $request->to_year,
        'field_of_study' => $request->field_of_study,
        'description' => $request->description,
        'logo' => $logoPath ? "/storage/" . $logoPath : null, // Save the path
    ]);
    return response()->json(['message' => 'Education added successfully!', 'data' => $education]);
}
}





