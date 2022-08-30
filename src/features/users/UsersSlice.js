import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
            id: 1,
            firstname: "Sanjay",
            lastname: "Barad",
            email: "sanjay.barad@arhamtechnosoft.com",
            password: "Sanjay@123",
            type: 'customer',
            isLoggedin: false
        }
    ],
    currentUser: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    dispatchLogin: (state, action) => {
        var getLoginData = action.payload;
        var getLoginEmail = getLoginData.loginEmail;
        var getLoginPassword = getLoginData.loginPassword;
        let users = state.users;

        for(let usersKey in users){

            if(users[usersKey].email === getLoginEmail){
                var forUserID = users[usersKey].id;
                // var forUserEmail = users[usersKey].email;
                var forUserPassword = users[usersKey].password;

                if(forUserPassword === getLoginPassword){
                    var checkEmailAndPass = true;
                }
            }
        }

        if(checkEmailAndPass){
            for(let usersKey in state.users){
                state.users[usersKey].isLoggedin = false;
            }
            
            var userIndex = state.users.map(function(x) {return x.id; }).indexOf(forUserID);
            state.users[userIndex].isLoggedin = true;
            state.currentUser = state.users[userIndex];
        }else{
            alert("Email is NOT valid!");
        }
    },
    dispatchRegister: (state, action) => {
        var getRegisterData = action.payload;
        var getFirstName = getRegisterData.registerFirstname;
        var getLastName = getRegisterData.registerLastname;
        var getEmail = getRegisterData.registerEmail;
        var getPassword = getRegisterData.registerPassword;
        var getConfirmPassword = getRegisterData.registerConfirmPassword;
        
        var checkPassword, emailExist;
        if(getPassword === getConfirmPassword){
            checkPassword = true;
        }else{
            checkPassword = false;
        }

        for(let usersKey in state.users){
            if(state.users[usersKey].email === getEmail){
                emailExist = true;
            }
        }

        if(checkPassword){

            if(!emailExist){
                var getUniqueId = new Date().getUTCMilliseconds();
                var registerNewData = {
                    id: parseInt(getUniqueId),
                    firstname: getFirstName,
                    lastname: getLastName,
                    email: getEmail,
                    password: getPassword,
                    type: 'customer',
                    isLoggedin: false
                }
    
                state.users.push(registerNewData);
                alert("Congrats You Are Register!");
            }else{
                alert("Email is Already Exist, Please Change the Email!");
            }
            
        }else{
            alert("Password and Confirm Password are NOT same!")
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { dispatchLogin, dispatchRegister } = usersSlice.actions

export default usersSlice.reducer;