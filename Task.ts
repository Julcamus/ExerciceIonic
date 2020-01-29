import  "date.ts";
import "priority.ts";
export class task {
    content : string;
    Date : MaDate;
    priority : Priority;
    checked : boolean = false;

    getcontent (): string {
        return this.content;
    }
    setcontent (content : string){
        this.content = content ;
    }
    getDate ():MaDate{
        return this.Date;
    }
    setDate (Date : MaDate){
        this.Date= Date;
    }
    getPriority (): Priority{
        return this.priority;
    }
    setPriority (priority:Priority){
        this.priority=priority;
    }
    getchecked():boolean{
        return this.checked;
    }
    setchecked (checked : boolean){
        this.checked=checked;
    }
    add(content : string, Date : MaDate, priority : Priority) {
        let id : number ;
        return id ;
    }
    update(content? : string, Date? : MaDate, priority? : Priority, checked? : boolean){
        this.content=content;
        this.Date= Date;
        this.priority=priority;
        this.checked=checked;

    }
    close():void
    {
        this.checked = true;
        
    }
    toString() : string{
        let etat : string 
        if (this.checked==true){
            etat = "Effectu¨¦"
        }else{
            etat = "Non effectu¨¦"
        }
        return "Contenu : Apprendre Typescript \n Date : "+this.Date+"\n Priority"+this.priority+"\n Etat :"+ etat ;
    }
}
