/*
        Exercice de manipulation des classes
*/

class Dat {
    private _year: number;
    private _month: number;
    private _day: number;

    constructor() {
        this._year = 0;
        this._month = 0;
        this._day = 0;
    }

    get year(): number { return this._year };
    set year(newYear: number) { this._year = newYear };
    get mpnth(): number { return this._month };
    set month(newYear: number) { this._year = newYear };
    get day(): number { return this._day };
    set day(newYear: number) { this._year = newYear };

    toString(): string {
        return (this._year + '-' + this._month + '-' + this._day);
    }

    create(year: number, month: number, day: number): string {
        this._year = year;
        this._month = month;
        this._day = day;
        return ("La date crée est : "+year + '-' + month + '-' + day)
    }
    setDate(year: number, month: number, day: number) {
        this.create(year, month, day);
    }
    yesterday(year: number, month: number, day: number): string {
        if (day == 1) {
            if (month == 1) {
                // Cas du 1er Janvier
                this._year = year - 1;
                this._month = 12;
                this._day = 31;
            }
            if (month == 3) {
                // Cas du 1er Mars
                this._year = year;
                this._month = 2;
                this._day = 28;
            }
            if (month == 2 || month == 4 || month == 6 || month == 8 || month == 9 || month == 11) {
                this._year = year;
                this._month = month - 1;
                this._day = 31;
            }
            if (month == 3 || month == 5 || month == 7 || month == 10 || month == 12) {
                this._year = year;
                this._month = month - 1;
                this._day = 30;
            }
        }
        else {
            this._year = year;
            this._month = month;
            this._day = day - 1;
        }

        return (this._year + '-' + this._month + '-' + this._day);

    }

    tomorrow(year: number, month: number, day: number): string {

        if (day == 31 && month == 12) {
            this._year = year + 1;
            this._day = 1;
            this._month = 1
        }
        else if (day == 28 && month == 2) {
            this._year = year;
            this._month = 3;
            this._day = 1;
        }
        else if ((month == 3 || month == 5 || month == 7 || month == 10) && day == 31) {
            this._year = year;
            this._month = month + 1;
            this._day = 1;
        }
        else if ((month == 2 || month == 4 || month == 6 || month == 8 || month == 9 || month == 11) && day == 30) {
            this._year = year;
            this._month = month + 1;
            this._day = 1;
        }
        else {
            this._year = year;
            this._month = month;
            this._day = day + 1;
        }

        return (this._year + '-' + this._month + '-' + this._day);

    }

    addDay(entier: number = 1): string {
        var nombre: number = entier;

        return (this._year + nombre + '-' + this._month + '-' + this._day);

    }

    subDay(entier: number = 1): string {
        var nombre: number = entier;

        return (this._year - nombre + '-' + this._month + '-' + this._day);

    }

    addMonth(entier: number = 1): string {
        var nombre: number = entier;

        return (this._year + nombre + '-' + this._month + '-' + this._day);

    }

    subMonth(entier: number = 1): string {
        var nombre: number = entier;

        return (this._year - nombre + '-' + this._month + '-' + this._day);

    }

    addYear(entier: number = 1): string {
        var nombre: number = entier;

        return (this._year + nombre + '-' + this._month + '-' + this._day);

    }

    subYear(entier: number = 1): string {
        var nombre: number = entier;

        return (this._year - nombre + '-' + this._month + '-' + this._day);

    }


}


let newDate = new Dat() ; 
console.log(newDate.create(2010,12,12)) ; 
