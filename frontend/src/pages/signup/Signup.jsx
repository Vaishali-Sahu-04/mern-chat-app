import React from 'react'
import GenderCheckbox from './GenderCheckbox'
 const SignUp = () => {
 	return (
 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
 					Sign Up <span className='text-blue-500'> ChatApp</span>
 				</h1>

 				<form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text text-white'>Full Name</span>
 						</label>
 						<input type='text' placeholder='John Doe' className='w-full bg-black input input-bordered  h-10' />
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base label-text text-white'>Username</span>
 						</label>
 						<input type='text' placeholder='johndoe' className='w-full bg-black input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text text-white'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Enter Password'
 							className='w-full input bg-black input-bordered h-10'
 						/>
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text text-white'>Confirm Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Confirm Password'
 							className='w-full bg-black input input-bordered h-10'
 						/>
 					</div>

 					<GenderCheckbox />

 					<a className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
 						Already have an account?
 					</a>

 					<div>
 						<button className='btn bg-black text-gray-400 hover:text-black btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
 					</div>
 				</form>
 			</div>
 		</div>
 	);
 };
 export default SignUp;