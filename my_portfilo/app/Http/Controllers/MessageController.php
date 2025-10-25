<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message; // We'll create this model
use App\Events\MessageSent;

class MessageController extends Controller
{
    public function index()
    {
        // Return all messages
        return Message::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        $message = Message::create([
            'text' => $request->message,
            'user' => $request->user ?? 'Me', // or Auth::user()->name
        ]);

        // Broadcast the message to Pusher
        broadcast(new MessageSent($message))->toOthers();

        return response()->json($message, 201);
    }
}
