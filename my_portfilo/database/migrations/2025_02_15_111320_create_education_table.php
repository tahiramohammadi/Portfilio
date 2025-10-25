<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education', function (Blueprint $table) {
            $table->id();
            $table->string('degree'); // Degree or qualification
            $table->string('institute'); // Institute name
            $table->year('from_year'); // Start year
            $table->year('to_year');  // Year of passing
            $table->string('field_of_study'); // Field of study
            $table->text('description')->nullable();
            $table->string('logo')->nullable();  

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('education');
    }
};
