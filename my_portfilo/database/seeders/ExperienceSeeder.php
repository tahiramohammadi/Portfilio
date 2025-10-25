<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('experiences')->insert([
            [
                'about_id'=>1,
                'title'   => 'Fontend Developer',
                'company'     => 'Freelencer',
                'date'  => '2023-2024',
                'description' => 'Developed web applications using Bootstrap and Vue.js, the system was about how to rent and buy a house in Afghanistan',
                'insert_type' => 'Full-time',
                'logo'=> 'freelencer.jpg',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'about_id'=>1,
                'title'   => 'full-stack Developer',
                'company'     => 'Smart Fariqi Company',
                'date'  => '2023/4/1-2023/8/10',
                'description' => 'Develped a software that helps businesses manage interactions with customers, clients, and prospects. It stores customer data, tracks interactions, automates processes, and improves customer service.',
                'insert_type' => 'Full-time',
                'logo'=> 'sfc.jpg',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'about_id'=>1,
                'title'   => 'It Officer',
                'company'   => 'Dast Mehrabani relief and Charity organization',
                'date'  => '2022-2023',    
                'description' => 'Regularly maintain and update systems , Troubleshoot system errors and upgrade them Data Management',
                'insert_type' => 'Full-time',
                'logo'=> 'fcd.jpg',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'about_id'=>1,
                'title'  => 'Scope Officer',
                'company'   => 'friends Community and Development Organization',
                'date'  => '2024/6/10-2024/12/10',    
                'description' => 'Beneficiary Ragistration, Data management and Reporting, Transfer implementation and Monitoring',
                'insert_type' => 'Full-time',
                'logo'=> 'fcdo.jpg',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
            [
                'about_id'=>1,
                'title'   => 'Computer Trainer ',
                'company'     => 'Moraa Educational complex',
                'date'  => '2024',    
                'description' => 'teaching Microsoft Office to the Students',
                'insert_type' => 'Part-time',
                'logo'=> 'mora.jpg',
                'created_at'  => now(),
                'updated_at'  => now(),
            ],
        ]);
    }
}
