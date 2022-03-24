(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df39ca12"],{2134:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[t.inmain?i("section",{attrs:{id:"create-article-main"}},[t._m(0),t._m(1),i("section",{attrs:{id:"course-form-container"}},[i("div",{staticClass:"article-title-container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.courseTitle,expression:"courseTitle"}],staticClass:"article_title_input content_input",attrs:{type:"text",placeholder:" Input The Course Title Here..."},domProps:{value:t.courseTitle},on:{blur:function(e){return t.save("updateCourseTitle")},input:function(e){e.target.composing||(t.courseTitle=e.target.value)}}})]),i("div",{staticClass:"upload_img_vid_container"},[i("p",{staticClass:"upload-text"},[t._v("Upload cover image For the course (Optional) :")]),i("form",{staticClass:"fileinput",attrs:{enctype:"multipart/form-data",id:"course-cover-image-form"}},[i("input",{staticClass:"post_image_input",attrs:{type:"file",placeholder:"Upload Image",id:"course-coverimage"},on:{change:function(e){return t.save("updateCourseCoverImage")}}})])]),i("div",{staticClass:"hashtags_container"},[i("modal",{staticClass:"hashtagprompt",attrs:{name:"hashTagPrompt",adaptive:!0,height:"auto","max-width":t.maxWidth,width:"90%"}},[i("section",{staticClass:"hashtaginputcontainer"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentHashtag,expression:"currentHashtag"}],staticClass:"content_input",attrs:{placeholder:"Add your hashtag"},domProps:{value:t.currentHashtag},on:{input:function(e){e.target.composing||(t.currentHashtag=e.target.value)}}}),i("vs-button",{staticClass:"add-hashtag-button",on:{click:function(e){return t.addHashtag()}}},[t._v("Add Hashtag "),i("i",{staticClass:"fas fa-plus"})])],1)]),i("p",{staticClass:"hashtag_desc"},[t._v("Help the right audience find your course, add hashtags.")]),i("p",{staticClass:"tags_container"},[t._l(t.hashtags,(function(e){return i("span",{key:e.id,staticClass:"hashtag"},[t._v(t._s(e.keyword))])})),i("button",{staticClass:"add_hashtag_button",on:{click:function(e){return t.openHashTagPrompt()}}},[t._v("Add Hashtag "),i("i",{staticClass:"fas fa-plus"})])],2)],1),i("div",{staticClass:"function01_container"},[i("div",{staticClass:"title content_title_container"},[t._m(2),i("div",[i("div",{staticClass:"add_new_section"},[i("p",{staticClass:"add_new_section_button pointercursor",on:{click:function(e){return t.addNewSection()}}},[t._v("Add New Section "),i("i",{staticClass:"fas fa-plus"})])])])]),i("div",{staticClass:"section_title_desc"},[t._v(" Course Section Title ")]),t._l(t.courseSections,(function(e){return i("div",{key:e.id,staticClass:"section_container"},[i("div",{staticClass:"section_id"},[i("p",{staticClass:"section_title"},[t._v(t._s(e.title))])]),i("div",{staticClass:"edit_container"},[i("p",{staticClass:"edit_section_button",on:{click:function(i){return t.moveToEditSection(e.id)}}},[t._v("Edit This Section "),i("i",{staticClass:"fas fa-pen"})]),i("p",{staticClass:"delete_section_button",on:{click:function(i){return t.openSectionDeletePrompt(e.id)}}},[i("i",{staticClass:"fas fa-archive delete_section_icon"})])])])}))],2)]),i("section",{staticClass:"function02"},[i("div",[i("p",{staticClass:"pointercursor",on:{click:function(e){return t.saveMain()}}},[t._v("Save as draft "),i("i",{staticClass:"fas fa-save"})])]),i("div",[i("p",{staticClass:"p02",on:{click:function(e){return t.moveToPreview("preview")}}},[t._v("Preview "),i("i",{staticClass:"fas fa-eye"})])])]),i("section",[i("vs-button",{staticClass:"post_article_button",attrs:{block:""}},[t._v("Publish Course "),i("i",{staticClass:"fas fa-paper-plane"})])],1)]):t._e(),t.inedit?i("section",{attrs:{id:"editSection"}},[i("div",{staticClass:"tools_container_main"},[i("div",{staticClass:"top_tools"},[i("div",{staticClass:"top01"},[t._e(),i("div",{staticClass:"otherFunctions"},[i("span",{staticClass:"edit_section_title"},[t._v("Edit Course Section")]),i("button",{staticClass:"editbtn01 done_button",on:{click:function(e){return t.save()}}},[t._v("Save "),i("i",{staticClass:"fas fa-save"})]),t._v(" "),i("button",{staticClass:"editbtn02 done_button",on:{click:function(e){return t.back()}}},[t._v("Go Back "),i("i",{staticClass:"fas fa-arrow-left"})])])]),i("div",{staticClass:"tools_wrapper"},[i("div",{staticClass:"tools_container"},[i("span",{staticClass:"tools_text"},[t._v("Tools : ")]),t._v(" "),i("button",{staticClass:"insert_tool_btn",on:{click:function(e){return t.addParagraph()}}},[t._v("Add Paragraph")]),t._v(" "),i("button",{staticClass:"insert_tool_btn",on:{click:function(e){return t.addSubheading()}}},[t._v("Add Sub_Heading")]),t._v(" "),i("button",{staticClass:"insert_tool_btn",on:{click:function(e){return t.addImage()}}},[t._v("Add Image")]),i("button",{staticClass:"insert_tool_btn",on:{click:function(e){return t.addDocument()}}},[t._v("Upload Document")]),t._v(" "),i("button",{staticClass:"insert_tool_btn",on:{click:function(e){return t.openAddQuizModal()}}},[t._v("Add Quiz Question")])])])]),i("div",{staticClass:"bottom_divider_tools"})]),i("div",{staticClass:"space-opener"}),i("div",{staticClass:"titlebox"},[t.editActive&&t.editActive&&"title"==t.presentContentItem?t._e():i("div",{staticClass:"renderbox"},[i("div",{staticClass:"function_box"},[i("div",{staticClass:"editFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(e){return t.openEditBox("title")}}},[i("i",{staticClass:"fas fa-pen"})])])]),i("div",{staticClass:"render_content_container"},[i("p",[t._v(t._s(t.title))])])]),t.editActive&&"title"==t.presentContentItem?i("div",{staticClass:"editbox"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"content_box title_content_box",attrs:{placeholder:t.sections[t.currentSection].title.placeholder,name:"article-title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("div",{staticClass:"done_container"},[i("button",{staticClass:"done_button",on:{click:function(e){return t.save("updateSectionTitle")}}},[t._v("Done "),i("i",{staticClass:"fas fa-check"})])])]):t._e()]),t._l(t.currentContentItems,(function(e){return i("div",{key:e.id},["subheading"==e.contentType?i("div",{staticClass:"subheadingbox"},[t.editActive&&t.editActive&&t.presentContentItem==e.id?t._e():i("div",{staticClass:"renderbox"},[i("div",{staticClass:"function_box"},[i("div",{staticClass:"editFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openEditBox(e.id)}}},[i("i",{staticClass:"fas fa-pen"})])]),i("div",{staticClass:"deleteFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openContentDeletePrompt(t.currentSection,e.id)}}},[i("i",{staticClass:"fas fa-archive"})])])]),i("div",{staticClass:"render_content_container"},[i("p",{staticClass:"edit_article_subheading"},[t._v(t._s(e.content))])])]),t.editActive&&t.presentContentItem==e.id?i("div",{staticClass:"editbox"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentContentItem,expression:"currentContentItem"}],staticClass:"content_box",attrs:{placeholder:"Input a subheading...",name:"article-subheading"},domProps:{value:t.currentContentItem},on:{input:function(e){e.target.composing||(t.currentContentItem=e.target.value)}}}),i("div",{staticClass:"done_container"},[i("button",{staticClass:"done_button",on:{click:function(e){return t.save("updateContentItem")}}},[t._v("Done "),i("i",{staticClass:"fas fa-check"})])])]):t._e()]):t._e(),"paragraph"==e.contentType?i("div",{staticClass:"paragrahpbox"},[t.editActive&&t.editActive&&t.presentContentItem==e.id?t._e():i("div",{staticClass:"renderbox"},[i("div",{staticClass:"function_box"},[i("div",{staticClass:"editFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openEditBox(e.id)}}},[i("i",{staticClass:"fas fa-pen"})])]),i("div",{staticClass:"deleteFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openContentDeletePrompt(t.currentSection,e.id)}}},[i("i",{staticClass:"fas fa-archive"})])])]),i("div",{staticClass:"render_content_container"},[i("p",[t._v(t._s(e.content))])])]),t.editActive&&t.presentContentItem==e.id?i("div",{staticClass:"editbox"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentContentItem,expression:"currentContentItem"}],staticClass:"content_box",attrs:{placeholder:"Edit your paragraph here",name:"article-paragraph"},domProps:{value:t.currentContentItem},on:{input:function(e){e.target.composing||(t.currentContentItem=e.target.value)}}}),i("div",{staticClass:"done_container"},[i("button",{staticClass:"done_button",on:{click:function(e){return t.save("updateContentItem")}}},[t._v("Done "),i("i",{staticClass:"fas fa-check"})])])]):t._e()]):t._e(),"image"==e.contentType?i("div",{staticClass:"imagebox"},[t.editActive&&t.editActive&&t.presentContentItem==e.id?t._e():i("div",{staticClass:"renderbox"},[i("div",{staticClass:"function_box"},[i("div",{staticClass:"editFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openEditBox(e.id)}}},[i("i",{staticClass:"fas fa-pen"})])]),i("div",{staticClass:"deleteFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openContentDeletePrompt(t.currentSection,e.id)}}},[i("i",{staticClass:"fas fa-archive"})])])]),i("div",{staticClass:"render_content_container"},[i("img",{attrs:{src:e.content,alt:"article image"}})])]),i("div",{staticClass:"editbox",class:{hidden:!(t.editActive&&t.presentContentItem==e.id)}},[i("div",{staticClass:"upload_img_vid_container"},[i("p",{staticClass:"upload-text"},[t._v("Add Image To this section :")]),i("form",{staticClass:"fileinput",attrs:{enctype:"multipart/form-data"}},[i("input",{staticClass:"post_image_input",attrs:{id:e.realid,type:"file",placeholder:"Upload Image"},on:{change:function(e){return t.updateImage()}}})])]),i("div",{staticClass:"done_container"},[i("button",{staticClass:"done_button",on:{click:function(e){return t.save("updateContentItem")}}},[t._v("Done "),i("i",{staticClass:"fas fa-check"})])])])]):t._e(),"document"==e.contentType?i("div",{staticClass:"paragraphbox"},[t.editActive&&t.editActive&&t.presentContentItem==e.id?t._e():i("div",{staticClass:"renderbox"},[i("div",{staticClass:"function_box"},[i("div",{staticClass:"editFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openEditBox(e.id)}}},[i("i",{staticClass:"fas fa-pen"})])]),i("div",{staticClass:"deleteFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openContentDeletePrompt(t.currentSection,e.id)}}},[i("i",{staticClass:"fas fa-archive"})])])]),i("div",{staticClass:"render_content_container"},[i("p",[t._v("Uploaded Document : "+t._s(e.content))])])]),i("div",{staticClass:"editbox",class:{hidden:!(t.editActive&&t.presentContentItem==e.id)}},[i("div",{staticClass:"upload_img_vid_container"},[i("p",{staticClass:"upload-text"},[t._v("Upload A document for this section (.pdf or .docx):")]),i("form",{staticClass:"fileinput",attrs:{enctype:"multipart/form-data"}},[i("input",{staticClass:"post_image_input",attrs:{id:e.realid,type:"file",placeholder:"Upload Document"},on:{change:function(e){return t.updateDoc()}}})])]),i("div",{staticClass:"done_container"},[i("button",{staticClass:"done_button",on:{click:function(e){return t.save("updateContentItem")}}},[t._v("Done "),i("i",{staticClass:"fas fa-check"})])])])]):t._e()])})),i("section",{staticClass:"quiz_render_section"},[t._m(3),i("p",{staticClass:"no-quiz-text"},[0==t.quizcount?i("i",[t._v("No Quiz for this section yet!")]):t._e(),0!==t.quizcount?i("i",[t._v(" "+t._s(t.quizcount)+" quiz question"),t.quizcount>1?i("span",[t._v("s")]):t._e(),t._v(" for this section")]):t._e(),t._v(" "),i("button",{staticClass:"insert_tool_btn",on:{click:function(e){return t.openAddQuizModal()}}},[t._v("Add Quiz Question")])]),i("div",{staticClass:"render_for_quizes"},t._l(t.quizes,(function(e){return i("div",{key:e.id},[i("div",[i("div",{staticClass:"renderbox"},[i("div",{staticClass:"function_box"},[i("div",{staticClass:"editFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openEditQuizModal(e.id)}}},[i("i",{staticClass:"fas fa-pen"})])]),i("div",{staticClass:"deleteFunction"},[i("p",{staticClass:"fi_container pointercursor",on:{click:function(i){return t.openDeleteQuizPrompt(t.currentSection,e.id)}}},[i("i",{staticClass:"fas fa-archive"})])])]),i("div",{staticClass:"quiz_render_content_container"},[i("div",{staticClass:"question_container"},[i("p",{staticClass:"quiz_desc"},[t._v("Question :")]),i("p",[t._v(" "+t._s(e.question))])]),i("div",{staticClass:"question_container"},[i("p",{staticClass:"quiz_desc"},[t._v("Answer :")]),i("p",[t._v(" "+t._s(e.answer))])])])])])])})),0)])],2):t._e(),i("div",{staticClass:"addquizmodalcontainer"},[i("modal",{staticClass:"addquiz_modal",attrs:{name:"addquiz",adaptive:!0,height:"auto","max-width":t.maxWidth,width:"90%"}},[i("div",{staticClass:"add-quizcontainer"},[i("div",{staticClass:"quiz_modal_title_container"},[i("p",[t._v("Add New Quiz Question For The Section.")])]),i("div",[i("p",{staticClass:"quiz_desc"},[t._v("Question : ")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quizQuestion,expression:"quizQuestion"}],staticClass:"quiz_input",attrs:{type:"text"},domProps:{value:t.quizQuestion},on:{input:function(e){e.target.composing||(t.quizQuestion=e.target.value)}}})]),i("div",[i("p",{staticClass:"quiz_desc"},[t._v("Answer : ")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quizAnswer,expression:"quizAnswer"}],staticClass:"quiz_input",attrs:{type:"text"},domProps:{value:t.quizAnswer},on:{input:function(e){e.target.composing||(t.quizAnswer=e.target.value)}}})]),i("div",[i("vs-button",{staticClass:"add-quiz-button",on:{click:function(e){return t.addQuiz()}}},[t._v("Add New Quiz Question "),i("i",{staticClass:"fas fa-plus"})])],1)])])],1),t.inpreview?i("section",{attrs:{id:"preview"}},[i("div",[t._v("This is the preview section.")])]):t._e()])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-title-container"},[i("p",[t._v("Create A Course")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-desc-container"},[i("p",[i("i",{staticClass:"fas fa-light"}),t._v("Share your knowledge and experience by teaching others")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",{staticClass:"article_content_title"},[t._v("Course Content")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quiz_render_title"},[i("p",[t._v("Quiz Questions")])])}],o=i("b85c"),a=(i("b0c0"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("a434"),{data:function(){return{hashtags:[],hashtag:"",currentHashtag:"",maxWidth:480,sections:[{id:0,title:{id:"0",contentType:"title",content:"Section Title/Heading",placeholder:"Input your title/heading here"},contentItems:[],quizes:[]}],currentSection:0,presentContentItem:"title",renderOpen:!0,editActive:!0,courseTitle:"",quizQuestion:"",quizAnswer:"",currentQuiz:"latest",quizUpdate:!1,cid:void 0,saved:!1,MID:JSON.parse(window.localStorage.getItem("userlogindata")).MID,DID:JSON.parse(window.localStorage.getItem("userlogindata")).DID}},created:function(){this.$store.commit("updatecurrentroute","create");var t=this.$route.params.id;return void 0!==t?(this.saved=!0,this.cid=t,this.$vs.loading({text:"fetching your draft data"}),this.getCourseContent(t)):(this.saved=!1,this.cid=String(Math.round(1e7*Math.random()))+JSON.parse(window.localStorage.getItem("userlogindata")).MID,this.__reqSaveInit(),void console.log("saved",this.saved,"newCourseID",this.cid))},computed:{quizcount:function(){var t=this.sections[this.currentSection].quizes.length;return t},quizes:function(){var t=this.sections[this.currentSection].quizes;return t},courseSections:function(){var t,e=[],i=Object(o["a"])(this.sections);try{for(i.s();!(t=i.n()).done;){var n=t.value;e.push({id:n.id,title:n.title.content})}}catch(s){i.e(s)}finally{i.f()}return e},currentContentItems:function(){var t=this.sections[this.currentSection].contentItems;return console.log(t),t},title:{set:function(t){this.sections[this.currentSection].title.content=t},get:function(){return console.log(this.sections[this.currentSection].title.content),this.sections[this.currentSection].title.content}},currentContentItem:{set:function(t){this.sections[this.currentSection].contentItems[this.presentContentItem].content=t},get:function(){return this.sections[this.currentSection].contentItems[this.presentContentItem].content}},inmain:function(){var t=this.$route.hash;return""==t},inedit:function(){var t=this.$route.hash;return"#edit"==t},inpreview:function(){var t=this.$route.hash;return"#preview"==t}},methods:{addQuiz:function(){var t=this;if(console.log("adding quiz","question : "+this.quizQuestion+"answer : "+this.quizAnswer),this.$modal.hide("addquiz"),""!=this.quizQuestion){var e={id:"",question:"",answer:""};if(e.question=this.quizQuestion,e.answer=this.quizAnswer,e.id=this.currentQuiz,console.log(e.id,this.currentQuiz,"quizObj.id","this.currentQuiz"),this.currentQuiz!==this.quizcount?this.sections[this.currentSection].quizes[this.currentQuiz]=e:this.sections[this.currentSection].quizes.push(e),console.log(this.sections[this.currentSection].quizes),this.quizQuestion="",this.quizAnswer="",this.quizUpdate)return this.save("updateQuizItem"),void(this.quizUpdate=!1);this.save("addQuizItem")}else this.$modal.show("dialog",{title:"No Question Added",text:"You cannot leave the question input blank.",buttons:[{title:"Okay",handler:function(){t.$modal.hide("dialog")}}]})},addDocument:function(){var t={id:"",contentType:"document",content:"no document uploaded!",changed:"",realid:""};t.realid="courseEdit"+String(Math.round(1e8*Math.random()))+"document",t.id=this.sections[this.currentSection].contentItems.length,this.sections[this.currentSection].contentItems.push(t),this.presentContentItem=t.id,this.editActive=!0,console.log(t.id)},updateDoc:function(){var t=this.sections[this.currentSection].contentItems[this.presentContentItem];t.content=document.getElementById(t.realid).files[0].name,this.editActive=!1},addNewSection:function(){var t={id:this.sections.length,title:{id:"",contentType:"title",content:"Section Title/Heading",placeholder:"Add Section Title/Heading Here"},contentItems:[],quizes:[]};this.sections.push(t),console.log("sections",this.sections),this.save("addNewSection")},addParagraph:function(){var t={id:"",contentType:"paragraph",content:"",placeholder:"Add New Paragraph Here"};t.id=this.sections[this.currentSection].contentItems.length,this.sections[this.currentSection].contentItems.push(t),console.log(this.sections[this.currentSection].contentItems),this.presentContentItem=t.id,this.editActive=!0,console.log(t.id),this.save("addContentItem")},addSubheading:function(){var t={id:"",contentType:"subheading",content:"",placeholder:"Write Subheading."};t.id=this.sections[this.currentSection].contentItems.length,this.sections[this.currentSection].contentItems.push(t),this.presentContentItem=t.id,console.log(t.id),this.editActive=!0,this.save("addContentItem")},addImage:function(){var t={id:"",contentType:"image",content:"",changed:"",realid:""};t.realid="courseEdit"+String(Math.round(1e8*Math.random()))+"img",t.id=this.sections[this.currentSection].contentItems.length,this.sections[this.currentSection].contentItems.push(t),this.presentContentItem=t.id,this.editActive=!0,console.log(t.id),this.save("addContentItem")},updateImage:function(){var t=this.sections[this.currentSection].contentItems[this.presentContentItem];t.content=window.URL.createObjectURL(document.getElementById(t.realid).files[0]),console.log(t.content),this.editActive=!1},openEditBox:function(t){this.editActive=!0,this.presentContentItem=t},closeEditBox:function(){this.editActive=!1},moveToPreview:function(t){this.$router.push({path:"create-course#preview"}),this.currentSection=t},moveToEditSection:function(t){this.$router.push({path:"create-course#edit"}),this.currentSection=t,console.log("this.currentSection",this.currentSection)},back:function(){this.$router.go(-1)},openHashTagPrompt:function(){this.$modal.show("hashTagPrompt")},addHashtag:function(){var t={id:this.hashtags.length,keyword:"#"+this.currentHashtag};this.hashtags.push(t),this.currentHashtag="",this.$modal.hide("hashTagPrompt"),this.save("updateCourseHashtags")},openAddQuizModal:function(){this.currentQuiz=this.quizcount,console.log("in add quiz"),this.$modal.show("addquiz")},openEditQuizModal:function(t){this.currentQuiz=t,console.log(t,this.sections[this.currentSection].quizes[this.currentQuiz]);var e=this.sections[this.currentSection].quizes[t].question,i=this.sections[this.currentSection].quizes[t].answer;console.log(e+" currentQuestion "+i+" currentAnswer"),this.quizQuestion=e,this.quizAnswer=i,this.$modal.show("addquiz"),this.quizUpdate=!0},openContentDeletePrompt:function(t,e){var i=this;this.$modal.show("dialog",{title:"Are you sure want to delete this content?",buttons:[{title:"Cancel",handler:function(){i.$modal.hide("dialog")}},{title:"Delete",handler:function(){i.$modal.hide("dialog"),i.deleteContentItem(t,e)}}]})},openSectionDeletePrompt:function(t){var e=this;this.$modal.show("dialog",{title:"Are you sure want to continue with this action?",buttons:[{title:"Cancel",handler:function(){e.$modal.hide("dialog")}},{title:"Delete",handler:function(){e.$modal.hide("dialog"),e.deleteSection(t)}}]})},openDeleteQuizPrompt:function(t,e){var i=this;this.$modal.show("dialog",{title:"Are you sure want to delete this quiz question?",buttons:[{title:"Cancel",handler:function(){i.$modal.hide("dialog")}},{title:"Delete",handler:function(){i.$modal.hide("dialog"),i.deleteQuiz(t,e)}}]})},createCourseObjectInit:function(){var t=this.cid,e="",i=this.MID,n="",s=[],o=[{id:0,title:{id:"0",contentType:"title",content:"Section Title/Heading",placeholder:"Input your title/heading here"},contentItems:[],quizes:[]}],a={cid:t,title:e,author:i,coverImage:n,hashtags:s,sections:o};return console.log(JSON.stringify(a)),a},deleteSection:function(t){this.sections.splice(t,1);var e,i=0,n=Object(o["a"])(this.sections);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.id=i,i++}}catch(a){n.e(a)}finally{n.f()}this.save("deleteSection",t)},deleteContentItem:function(t,e){this.sections[t].contentItems.splice(e,1);var i,n=0,s=Object(o["a"])(this.sections[t].contentItems);try{for(s.s();!(i=s.n()).done;){var a=i.value;a.id=n,n++}}catch(c){s.e(c)}finally{s.f()}console.log("deleted the content item successfully from DOM"),this.save("deleteContentItem",{sectionID:t,contentItemID:e})},deleteQuiz:function(t,e){this.sections[t].quizes.splice(e,1);var i,n=0,s=Object(o["a"])(this.sections[t].quizes);try{for(s.s();!(i=s.n()).done;){var a=i.value;a.id=n,n++}}catch(c){s.e(c)}finally{s.f()}console.log("deleted the content item successfully from DOM"),this.save("deleteQuiz",{sectionID:t,quizID:e})},getCourseContent:function(t){var e=this;this.$vs.loading();var i=this.MID,n=this.DID,s="http://localhost/edit-course";window.axios.get(s,{params:{MID:i,DID:n,cid:t}}).then((function(t){e.$vs.loading.close(),console.log("response",t.data),alert(JSON.stringify(t.data))})).catch((function(t){e.$vs.loading.close(),console.log("error",t.message),alert(t.message)})),console.log("fetch course request ended")},__reqSaveInit:function(){var t=this,e=this.MID,i=this.DID,n=this.createCourseObjectInit();n=JSON.stringify(n),console.log("courseDraftObject",n);var s="http://localhost/edit-course/",o=new FormData;o.append("MID",e),o.append("DID",i),o.append("data",n),o.append("cid",this.cid),o.append("attachedFile",void 0),o.append("editType","createNew"),window.axios.post(s,o).then((function(e){console.log(e.data),t.saved=!0})).catch((function(t){console.log(t.message)}))},sc:function(t){var e=this.MID,i=this.DID,n="http://localhost/edit-course/",s=new FormData;s.append("MID",e),s.append("DID",i),s.append("data"),s.append("cid",this.cid),s.append("attachedFile",void 0),s.append("editType",t),window.axios.post(n,s).then((function(t){console.log(t.data),alert(JSON.stringify(t.data))})).catch((function(t){console.log(t.message),alert(t.message)}))},__reqAddSection:function(t,e){var i=this.MID,n=this.DID;e=JSON.stringify(e);var s="http://localhost/edit-course/",o=new FormData;o.append("MID",i),o.append("DID",n),o.append("data",e),o.append("cid",this.cid),o.append("attachedFile",void 0),o.append("editType",t),window.axios.post(s,o).then((function(t){console.log(t.data),alert(JSON.stringify(t.data))})).catch((function(t){console.log(t.message),alert(t.message)}))},__reqAddContentItem:function(t,e){var i=this.MID,n=this.DID,s=JSON.stringify({contentObj:e,sectionID:this.currentSection});console.log("data object",e);var o="http://localhost/edit-course/",a=new FormData;a.append("MID",i),a.append("DID",n),a.append("data",s),a.append("cid",this.cid),a.append("attachedFile",void 0),a.append("editType",t),window.axios.post(o,a).then((function(t){console.log(t.data),alert(JSON.stringify(t.data))})).catch((function(t){console.log(t.message),alert(t.message)}))},__reqAddQuiz:function(t,e){var i=this.MID,n=this.DID,s=JSON.stringify(e);console.log(s);var o="http://localhost/edit-course/",a=new FormData;a.append("MID",i),a.append("DID",n),a.append("data",s),a.append("cid",this.cid),a.append("attachedFile",void 0),a.append("editType",t),window.axios.post(o,a).then((function(t){console.log(t.data),alert(JSON.stringify(t.data))})).catch((function(t){console.log(t.message),alert(t.message)}))},__reqDeleteQuiz:function(t,e){var i="http://localhost/edit-course/",n=new FormData;n.append("MID",this.MID),n.append("DID",this.DID),n.append("cid",this.cid),n.append("data",JSON.stringify({sectionID:t,quizID:e})),n.append("editType","deleteQuiz"),window.axios.post(i,n).then((function(t){console.log(t.data),alert(JSON.stringify(t.data)),console.log("deleted quiz successfully")})).catch((function(t){console.log(t.message),alert(t.message)}))},__reqDeleteSection:function(t){var e=new FormData,i="http://localhost/edit-course/";e.append("MID",this.MID),e.append("DID",this.DID),e.append("data",JSON.stringify({sectionID:t})),e.append("editType","deleteSection"),e.append("cid",this.cid),e.append("attachedFile",void 0),window.axios.post(i,e).then((function(t){console.log(t.data),console.log("deleted section successfully")})).catch((function(t){console.log(t.message)}))},__reqDeleteContentItem:function(t,e){var i=new FormData,n="http://localhost/edit-course/";i.append("MID",this.MID),i.append("DID",this.DID),i.append("cid",this.cid),i.append("data",JSON.stringify({sectionID:t,contentItemID:e})),i.append("editType","deleteContentItem"),window.axios.post(n,i).then((function(t){console.log(t.data),console.log("deleted content item successfully")})).catch((function(t){console.log(t.message)}))},__reqEditMain:function(t,e,i){console.log(e);var n=this.MID,s=this.DID,o=JSON.stringify({value:i}),a="http://localhost/edit-course/",c=void 0,r=new FormData;r.append("MID",n),r.append("DID",s),r.append("data",o),r.append("cid",this.cid),r.append("editType",t),"updateCourseTitle"==t?(r.append("attachedFile",c),window.axios.post(a,r).then((function(t){console.log(t.data),console.log("updated course title successfully")})).catch((function(t){console.log(t.message),console.log("unable to complete request to update title")}))):"updateCourseHashtags"==t?(r.append("attachedFile",c),window.axios.post(a,r).then((function(t){console.log(t.data)})).catch((function(t){console.log(t.message)}))):(c=document.getElementById("course-coverimage").files[0],r.append("attachedFile",c),window.axios.post(a,r).then((function(t){console.log(t.data)})).catch((function(t){console.log(t.message)})))},__reqUpdateSectionTitle:function(t,e){var i=this.MID,n=this.DID,s={value:e,sectionID:this.currentSection};console.log("data object",s),s=JSON.stringify(s);var o="http://localhost/edit-course/",a=new FormData;a.append("MID",i),a.append("DID",n),a.append("data",s),a.append("cid",this.cid),a.append("attachedFile",void 0),a.append("editType","updateSectionTitle"),window.axios.post(o,a).then((function(t){console.log(t.data)})).catch((function(t){console.log(t.message)}))},__reqUpdateContentItem:function(t,e){var i=this.MID,n=this.DID;console.log(e);var s=e.contentType;e=JSON.stringify(e);var o="http://localhost/edit-course/",a=new FormData;if(a.append("MID",i),a.append("DID",n),a.append("data",e),a.append("cid",this.cid),a.append("editType",t),"image"==s||"document"==s){var c=document.getElementById(this.sections[this.currentSection].contentItems[this.presentContentItem].realid).files[0];a.append("attachedFile",c)}else a.append("attachedFile",void 0);window.axios.post(o,a).then((function(t){console.log(t.data),alert(JSON.stringify(t.data))})).catch((function(t){console.log(t.message),alert(t.message)}))},__reqUpdateQuiz:function(t,e){var i=this.MID,n=this.DID;console.log(e),e=JSON.stringify(e);var s="http://localhost/edit-course/",o=new FormData;o.append("MID",i),o.append("DID",n),o.append("data",e),o.append("cid",this.cid),o.append("attachedFile",void 0),o.append("editType",t),window.axios.post(s,o).then((function(t){console.log(t.data),alert(JSON.stringify(t.data))})).catch((function(t){console.log(t.message),alert(t.message)}))},save:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.closeEditBox(),this.saved||(console.log("initializing the course on the server"),this.__reqSaveInit()),setTimeout((function(){switch(t){case"updateCourseTitle":console.log("updating the course title"),e.__reqEditMain("updateCourseTitle","course_title",e.courseTitle);break;case"updateCourseCoverImage":console.log("updating the course cover image");var n=document.getElementById("course-coverimage").files[0];console.log(n),e.__reqEditMain("updateCourseCoverImage","cover_image",e.cid+"cover_image");break;case"updateCourseHashtags":console.log("updating the course hashtags"),e.__reqEditMain("updateCourseHashtags","hashtags",e.hashtags);break;case"addNewSection":console.log("adding new course section");var s=e.sections[e.sections.length-1];console.log("Current Section Objects check here",s),e.__reqAddSection("addNewSection",s);break;case"updateSectionTitle":console.log("updating course section title");var o=e.sections[e.sections.length-1].title.content;e.__reqUpdateSectionTitle("updateSectionTitle",o);break;case"addContentItem":console.log("adding content item");var a=e.sections[e.currentSection].contentItems[e.presentContentItem];console.log("content item",a),e.__reqAddContentItem("addContentItem",a);break;case"updateContentItem":console.log("updating content item ");var c=e.sections[e.currentSection].contentItems[e.presentContentItem].content,r=e.sections[e.currentSection].contentItems[e.presentContentItem].contentType;console.log(c);var d={value:c,contentType:r,sectionID:e.currentSection,contentItemID:e.presentContentItem};e.__reqUpdateContentItem("updateContentItem",d);break;case"addQuizItem":console.log("adding quiz item");var l=e.sections[e.currentSection].quizes[e.currentQuiz],u={sectionID:e.currentSection,quizObject:l};e.__reqAddQuiz("addQuizItem",u);break;case"updateQuizItem":console.log("updating quiz item");var p=e.sections[e.currentSection].quizes[e.currentQuiz],h={sectionID:e.currentSection,quizID:e.currentQuiz,newQuizObj:p};e.__reqUpdateQuiz("updateQuizItem",h);break;case"deleteSection":console.log("deleting Section : "+i),e.__reqDeleteSection(i);break;case"deleteContentItem":console.log("deleting content item"),e.__reqDeleteContentItem(i.sectionID,i.contentItemID);break;case"deleteQuiz":console.log("deleting Quiz item",i.qid),e.__reqDeleteQuiz(i.sectionID,i.quizID)}}),500)}}}),c=a,r=(i("9d85"),i("0c7c")),d=Object(r["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports},"5f05":function(t,e,i){},"9d85":function(t,e,i){"use strict";i("5f05")}}]);
//# sourceMappingURL=chunk-df39ca12.cf97830c.js.map