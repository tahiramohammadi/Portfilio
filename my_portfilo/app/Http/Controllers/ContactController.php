<?php

namespace App\Http\Controllers;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Mime\Part\TextPart;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Http;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $captchaToken = $request->input('captcha_token');

        if (!$captchaToken) {
            return response()->json(['message' => 'Captcha token missing'], 400);
        }
        // Verify with Google
        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
    
        'secret' => env('RECAPTCHA_SECRET_KEY'),
            'response' => $captchaToken,
        ]);
    
        $data = $response->json();
    
        if (!$data['success']) {
            return response()->json(['message' => 'reCAPTCHA verification failed'], 400);
        }
      
      
      
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
            'subject'=>'required|string'
        ]);
    $contact = Contact::create( $validated);

    $data = [
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'message' => $request->input('message'),
        'subject'=>$request->input('subject')
    ];

    Mail::raw(
        "Name: {$data['name']}\nEmail: {$data['email']}\nMessage: {$data['message']}",
        function ($message) use ($data) {
            $message->to('mohammadit571@gmail.com') // ✅ Replace with your real email
                    ->subject('New Message from Portfolio Website');
        }
    );

    return response()->json($contact, 201);
    }




    public function create()
    {
        
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
        //
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
