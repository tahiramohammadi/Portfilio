<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = ['about_id', 'title', 'company', 'date', 'description', 'insert_type', 'logo'];
    public function abouts()
    {
        return $this->belongsTo(About::class);  
    }
}
