import { LightningElement } from "lwc";

export default class App extends LightningElement {
  cod="P00-1";
  name="João Pedro";
  phone="(15)98545-7624";
  email="joaopedronunesbonini@gmail.com";
  rating="Hot";


  alterarInfos(){
    if(this.name=="João Pedro"){
      this.name = "Rafael";
      this.cod = "P00-2";
      this.phone= "(16)99432-5454";
      this.email="rafael@gmail.com"
      this.rating="Cold"
    }else{
      this.cod="P00-1";
      this.name="João Pedro";
      this.phone="(15)98545-7624";
      this.email="joaopedronunesbonini@gmail.com";
      this.rating="Hot";
    }
  }
}
