Template.lesson.helpers({
    'activeLesson': function () {
        // Get the lesson ID from reactive var
        var lessonID = activeLessonID.get();

        // Get the lesson from DB
        var lesson = Lessons.findOne({_id: lessonID});

        return lesson;
    },
    'editingLessonText': function (template) {
        // return true if editing the lesson text
        // value is set on click event
        return editingLessonText.get() && (Meteor.userId() == "t8Xf8xSjmiHDKGxEF" || Meteor.userId() == "feKnQQv5w4b6hkisX" || Meteor.userId() == "5Fp9XzMhyDEjfnipt" || Meteor.userId() == "6ryZES3ZPJeeYs8YY" || Meteor.userId() == "xgoJBP5wo2drCtKBb");
    }
});

Template.lesson.events({
    'click .lesson-text': function () {
        // editing mode is true if text is clicked
        editingLessonText.set(true);

        // in edit mode,
        // add rich text editor
        // to lesson text
        if (editingLessonText.get() && (Meteor.userId() == "t8Xf8xSjmiHDKGxEF" || Meteor.userId() == "feKnQQv5w4b6hkisX" || Meteor.userId() == "5Fp9XzMhyDEjfnipt" || Meteor.userId() == "6ryZES3ZPJeeYs8YY" || Meteor.userId() == "xgoJBP5wo2drCtKBb")) {
            $('#rich-text-editor').summernote({
                'height': 300,
                'focus': true,
                toolbar: [
                    //[groupname, [button list]]
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['para', ['ul', 'ol']],
                    ['insert', ['link','picture','video','hr']],
                    ['view', ['fullscreen', 'codeview']],
                    ['help', ['help']]
                ]
            });

            // Set the rich text editor code to lesson text
            $('#rich-text-editor').code(this.text);
        }
    }
});
