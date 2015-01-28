(function() {
	
	// View
	var View = function() {
		this.lectureActive = false;
		this.cluelesses = 0;
		this.threshold = undefined;
		this.renderingProcess = undefined;

		this.initialize = function() { 
        
            var that = this;
            
            $(".activate-lecture").on("click", function (e) { // for JSFiddle purposes; in reality this will be separate. The teacher will submit the new Lecture with a title and number of students, and threshold.
                that.lectureActive = true;
                that.threshold = $(".threshold").val();
                // console.log('viewww');
            })

            $(".clueless").on("click"), function (e) { // This is temporary. Cluelesses will come from the server.
            	that.cluelesses += 1;
            }
        };

        this.renderCluelesses = function(cluelesses) {
        	console.log(cluelesses)   // for JSFiddle purposes as well. Will actually be involved in rendering color/whatever
        }
	}

	// Controller
	var Controller = function(view) {
		this.newData = {};
		this.view = view;

		this.callServer = function(callback){
			setTimeout(function(){
                var message = 'pollos hermanos';
                callback(message)
            },1000)
		}

		this.watch = function(callback) {
            
            var renderingProcess = setInterval(callback,1000)
        };

        this.updateStudent = function(student,newStatus) {
            student.status = newStatus;
            this.view.cleanChange();
            
        };

        this.updateView = function(student){
            // console.log(student, "<- student") 
            this.view.renderCluelesses(lecture.cluelesses);
        };
	}

	var Lecture = function(audienceCount) {
		// this.isActive = false;
        this.audienceCount = 20; // retrieved at start of lecture; hard-coded for now
        this.incrementAmount = (1 / this.audienceCount) * 100;
        this.decrementAmount = 1; // subject to change?
        this.decayRate = 200; // subject to change?
        this.cluelesses = 0;
    };

    var view = new View();
    view.initialize();
    var controller = new Controller(view);
    // var lecture = new Lecture(audienceCount); this doesn't go here
    
    controller.watch(function(){
        console.log('stuff');
        if (controller.view.lectureActive) {
            controller.callServer(function(data){
                controller.updateStudent(lecture,data);
                controller.updateView(lecture);
            });
            
        }
    });


})()