import { CanActivateFn } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem("emailId")!=null)   
    return true;
    else{
      return false;
    } 
};
