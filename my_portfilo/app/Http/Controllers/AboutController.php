<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\About;
class AboutController extends Controller
{

    public function __construct()
    {
        // Protect the 'store' and 'destroy' methods
        $this->middleware('auth:sanctum')->only(['store', 'destroy']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return response()->json(About::latest()->first());

        return response()->json([
            'bio' => $about->bio,
            'skills' => $about->skills,
            'cv_file' => $about->cv_file ? asset('storage/images/' . $about->cv_file) : null, 
            'profile_image' => $about->profile_image ? asset('storage/images/' . $about->profile_image) : null, // Full image URL
        ]);

    }

    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'bio' => 'required|string',
            'skills' => 'required|array', 
            'level' => 'required|array',
            'profile_image' => 'nullable|image|mimes:jpg,jpeg,png,gif', // Validate image file
            'cv_file' => 'nullable|file|mimes:pdf,doc,docx', // Validate CV file
        ]);

        $about = About::create($validatedData);


        $about = new About();
        $about->bio = $validated['bio'];
        $about->skills = json_encode($validated['skills']);
        $about->level = json_encode($request->level);
  // JSON data stored as an array
if ($request->hasFile('profile_image')) {
    $about->profile_image = $request->file('profile_image')->store('images', 'public');
}

if ($request->hasFile('cv_file')) {
    $about->cv_file = $request->file('cv_file')->store('images', 'public');
}
$about->save();

        return response()->json($about, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        {
            $request->validate([
                'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
    
            $about = About::first(); // Fetch first about record (modify as needed)
    
            if ($request->hasFile('profile_image')) {
                $file = $request->file('profile_image');
                $filename = time() . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('public/images', $filename); // Save in storage/app/public/about/
    
                $about->profile_image = $filename; // Save only the filename
            }
    
            $about->save();
    
            return response()->json(['message' => 'About section updated successfully!']);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
