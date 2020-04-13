export class Repository {
    constructor(
        public    name:string,
        public full_name:string,
        public url:string,
       public   html_url:string,
       public    description:string,
       public forks:number,
       public  watchers_count:number,
      public  language:string,
       public created_at:Date,
        ){ 
    
        }
}
