<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Resources\V1\SkillResource;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index (){
        return SkillResource::collection(Skill::all());
        // return SkillResource::collection(Skill::paginate(1));

    }

    public function store(StoreSkillRequest $request){
        Skill::create($request->validated());
        return response()->json("skill are stored");
    }

    public function update(StoreSkillRequest $request,Skill $skill){
        $skill->update($request->validated());
        return response()->json("sill are updated");
    }

    public function show(Skill $skill){
        return new SkillResource($skill);
    }

    public function destroy(Skill $skill){
        $skill->delete();
        return response()->json("delete");
    }
}
