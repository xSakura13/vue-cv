Vue.createApp({
    data(){
        return{
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        appNewNote(){
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        inputKeyPress(event){
            if (event.key === 'Enter'){
                this.appNewNote()
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx){
            this.notes.splice(idx, 1 )
        }
    },
    computed: {
        doubleCountComputed(){
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value){
            if (value.length > 15){
                this.inputValue = ''
            }
        }
    }
}).mount('#app')