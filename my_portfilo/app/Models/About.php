<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;
    protected $table = 'abouts'; 
    protected $fillable = ['bio', 'profile_image', 'skills', 'level','cv_file'];

    protected $casts = [
        'skills' => 'array',
        'level' => 'array',
    ];
    public function experiences()
    {
        return $this->hasMany(Experience::class);  // One-to-many relationship with Experience
    }

}
