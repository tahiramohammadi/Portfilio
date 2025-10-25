<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\About;
class Aboutseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        About::create([
            'bio' => 'Hello, I am Tahira Mohammadi; The 25 -year-old is a full-stack developer. I started programming in 2021 and continued to be specialize on it. These days, along with programming, I study about startups and businesses, In my leisure time, I am cooking  varies foods and watching my favorite series.',
            'skills' => json_encode(['HTML', 'CSS', 'Tailwind.css', 'BOOTSTRAP','VUE.JS'
           , 'React', 'Laravel', 'MYSQL', 'GIT']),
           'level' => json_encode([99, 85, 80, 95, 80, 87, 80,95, 90 ]),
           // Manually encode skills array as JSON
            'profile_image' => 'myimg.jpg',
            'cv_file' => 'tahiraMohammadi.pdf'
        ]);
    }
}
