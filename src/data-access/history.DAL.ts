export class HistoryDAL {

    private data: any

    constructor(data: any) {
        this.data = data;
    }

    getAllHistoryList() {
        return new Promise((resolve, reject) => {
            return resolve(this.data.history._data)
        });
    }


    addNewHistory(history: any) {
        return new Promise((resolve, reject) => {
            return resolve(this.data.history._data.push(history))
        });
    }

}