app.component("component1", {

    template:
    /*html*/
    `
    <div>
        <div>My List</div>
        <div>Tally = {{ tally }}</div>
        <input v-on:change="addIt" id="text-entry">
        <ul>
            <li v-for="item in myList">{{ item }}</li>
        </ul>
    </div>
    `,
    
    data: function() {  // Pass an object into the app with options and initial data
        return {
            myList: [],
            tally: 0
        }
    },
    
    methods: {          // Your custom functions go here

        // this function is called when text is entered
        addIt() {
            // get the new text
            let textEntry = document.getElementById("text-entry").value

            // add new item to the list by pushing it into the myList array
            this.myList.push(textEntry)

            // increment the tally count
            this.tally++

            // clear the text entry field after submit
            document.getElementById("text-entry").value=""
        }
    }

})