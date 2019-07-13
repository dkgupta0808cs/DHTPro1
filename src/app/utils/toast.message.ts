import { ToastrService } from 'ngx-toastr';
import { TOAST_SUCCESS, TOAST_ERROR } from '../constant/config.constant';

export class toastMessageUtil {

    static showToastMessage(toastr: ToastrService, toastType: string, msg: string){
      if(toastr && toastType) {
          switch(toastType) {
            case TOAST_SUCCESS :
                toastr.success(msg);
                break;
            case TOAST_ERROR :
                 toastr.error(msg);
                 break;
            default :
                 break;
          }
      }
    }
}