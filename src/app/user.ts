export class User {
    static result:any;
    constructor( 
     public  url:string,
     public login: string,
     public html_url:string,
    public followers_url:string,
    public follolling_url:string,
    public repos_url:string,
    public starred_url:string,
    public public_gists:number,
     public  public_repos:number,
     public followers:number,
      public following:number,
     public avatar_url:string,
      public created_at:Date,
      public updated_at:Date )
        {
 }
}

