<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Experience;
class experienceController extends Controller
{

    public function __construct()
    {
        // Protect the 'store' and 'destroy' methods
        $this->middleware('auth:sanctum')->only(['store', 'destroy']);
    }

    public function index()
    {
        $experience = Experience::all();
        return response()->json($experience); // Return data as JSON
    }

    public function store(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'company' => 'required|string|max:255',
        'date' => 'required|string|max:255',
        'description' => 'required|string',
        'insert_type' => 'required|string|max:255',
        'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048' // Validate logo file
    ]);

    $logoPath = null;
    
    if ($request->hasFile('logo')) {
        $logoPath = $request->file('logo')->store('images', 'public'); // Store in storage/app/public/logos
    }
  
    $experience = Experience::create([
        'title' => $request->title,
        'company' => $request->company,
        'date' => $request->date,
        'description' => $request->description,
        'insert_type' => $request->insert_type,
        'logo' => $logoPath ? "/storage/" . $logoPath : null, // Save the path
    ]);

    return response()->json(['message' => 'Experience added successfully!', 'data' => $experience]);
}
}