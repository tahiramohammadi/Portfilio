<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Education;
class EducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
        DB::table('education')->insert([
[
            'degree' => 'Bachelor',
            'institute' => 'Kabul University',
            'from_year' => '2018',
           'to_year' => '2022',
           // Manually encode skills array as JSON
            'field_of_study' => 'Information Technology',
            'description'=> 'We studied information technology and networking for four years',
            'logo'=>'ku.jpg'
           
        ],
        [
            'degree' => 'high School',
            'institute' => 'Shineh Deh high school',
            'from_year' => '2005',
           'to_year' => '2017',
           // Manually encode skills array as JSON
            'field_of_study' => 'School Subjects',
            'description'=> 'We studeis all subjects school including mathmatics, pphysics, litruture',
            'logo'=>'ministry.jpg'
        ], 

        [
            'degree' => 'English Certifacate',
            'institute' => 'Toefl House Center',
            'from_year' => '2021',
           'to_year' => '2022',
           // Manually encode skills array as JSON
            'field_of_study' => 'English language',
            'description'=> 'studying English languages for one years.',
            'logo'=>'ministry.jpg'
        ]
        ]);
    }
}
