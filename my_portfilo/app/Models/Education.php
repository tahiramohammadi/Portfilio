<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;
    protected $fillable = [
        'degree',
        'institute',
        'from_year',
        'to_year',
        'field_of_study',
        'logo',  // Added
        'description'
    ];
}
