<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller {
    public function index() { return User::all(); }
    public function show(User $user) { return $user; }
    public function store(Request $request) { return User::create($request->only(['name','email','password'])); }
    public function update(Request $request, User $user) { $user->update($request->only(['name','email'])); return $user; }
    public function destroy(User $user) { $user->delete(); return response()->noContent(); }
}
