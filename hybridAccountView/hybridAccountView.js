import { LightningElement,wire, track } from 'lwc'; 
import isMoreThan10k from '@salesforce/apex/HybridAccountViewController.isMoreThan10k';
 
export default class HybridAccountView extends LightningElement {
    @track cssDisplay = '';  
    @wire(isMoreThan10k)
    returnedFlag( response, error){  
        if(response && response.data === 'Yes'){ 
            this.cssDisplay = 'hidemodel';
        }
        else if(response && response.data === 'No'){ 
            window.location.replace("Some URL to redirect if account assigned are low"); 
        }
    } 
}