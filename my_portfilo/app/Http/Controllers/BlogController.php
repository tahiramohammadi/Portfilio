<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{

    public function __construct()
    {
        // Protect the 'store' and 'destroy' methods
        $this->middleware('auth:sanctum')->only(['store', 'destroy']);
    }

    public function index()
    {
        return Blog::latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $path = $request->file('image') ? $request->file('image')->store('blogs', 'public') : null;

        $blog = Blog::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $path,
        ]);

        return response()->json($blog, 201);
    }

    public function destroy(Blog $blog)
    {
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }
        $blog->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
