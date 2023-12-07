var modal = document.getElementById("PreviewM");
var btn = document.getElementById("previewBtn");
var span = document.getElementsByClassName("close-preview")[0];

//Date Fields Handling//

//Field 0.4
const ReferenceMeetingDateField = document.getElementById('ReferenceMeetingDate');
ReferenceMeetingDateField.addEventListener('change', event => {
    if(ReferenceMeetingDateField.value == ''){
        document.getElementById("ReferenceMeetingDatePreview").value = '';
    } else {
        document.getElementById("ReferenceMeetingDatePreview").value = ReferenceMeetingDateField.value;
    }
    
});

//Field 1.1
const ConveningDecisionDateField = document.getElementById('ConveningDecisionDate');
ConveningDecisionDateField.addEventListener('change', event => {
    document.getElementById("ConveningDecisionDatePreview").value = ConveningDecisionDateField.value;
});

//Field 1.5
const MeetingDateField = document.getElementById('MeetingDate');
MeetingDateField.addEventListener('change', event => {
    document.getElementById("MeetingDatePreview").value = MeetingDateField.value;
});

//Field 1.6
const MeetingTimeField = document.getElementById('MeetingTime');
MeetingTimeField.addEventListener('change', event => {
    document.getElementById("MeetingTimePreview").value = MeetingTimeField.value;
});

//Field 2.8
const MeetingEffectiveDateField = document.getElementById('MeetingEffectiveDate');
MeetingEffectiveDateField.addEventListener('change', event => {
    document.getElementById("MeetingEffectiveDatePreview").value = MeetingEffectiveDateField.value;
});

//Field 5.3
const QuorumPostponedMeetingDateField = document.getElementById('QuorumPostponedMeetingDate');
QuorumPostponedMeetingDateField.addEventListener('change', event => {
    document.getElementById("QuorumPostponedMeetingDatePreview").value = QuorumPostponedMeetingDateField.value;
});

//Field 5.4
const QuorumPostponedMeetingTimeField = document.getElementById('QuorumPostponedMeetingTime');
QuorumPostponedMeetingTimeField.addEventListener('change', event => {
    document.getElementById("QuorumPostponedMeetingTimePreview").value = QuorumPostponedMeetingTimeField.value;
});

//Date Fields Handling//


btn.onclick = function() {
  
    //Paragraph 0    
    //Field 0.1
  if(!document.getElementById("sizeWeight").checked && !document.getElementById("sizeDimensions").checked){
    /* document.getElementById("toggle-label-yes").classList.add('dualRadioUnchecked');
    document.getElementById("toggle-label-no").classList.add('dualRadioUnchecked'); */
    document.getElementById("isVotingSupported").innerHTML = "---";
  } else if(document.getElementById("sizeDimensions").checked){
    document.getElementById("isVotingSupported").innerHTML = "לא";
    /* document.getElementById("toggle-label-no").classList.add('dualRadioChecked');
    document.getElementById("toggle-label-no").classList.remove('dualRadioUnchecked');
    document.getElementById("toggle-label-yes").classList.add('dualRadioUnchecked');
    document.getElementById("toggle-label-yes").classList.remove('dualRadioChecked'); */
  } else if(document.getElementById("sizeWeight").checked){
    document.getElementById("isVotingSupported").innerHTML = "כן";
    /* document.getElementById("toggle-label-no").classList.add('dualRadioUnchecked');
    document.getElementById("toggle-label-yes").classList.add('dualRadioChecked');
    document.getElementById("toggle-label-no").classList.remove('dualRadioChecked');
    document.getElementById("toggle-label-yes").classList.remove('dualRadioUnchecked'); */
  }

    //Field 0.2
    var F02Value = document.getElementById("MeetingReportTypeSelected").innerHTML;
    document.getElementById("MeetingReportTypePreview").innerHTML = F02Value;
  
    //Field 0.3
    document.getElementById("ReferenceNumPreview").value = document.getElementById("ReferenceNum").value;

    //Field 0.5
    var F05Value = document.getElementById("RejectionReasonSelected").innerHTML;
    document.getElementById("RejectionReasonPreview").innerHTML = F05Value;
    
    //Field 0.6
    if(document.getElementById("RejectionReasonSelected").innerHTML === "אחר"){
        document.getElementById("ReferenceMeetingReasonPreview").innerHTML = document.getElementById("ReferenceMeetingReason").innerHTML;   
        document.getElementById("ReferenceMeetingReasonPreview").contentEditable = true; 
        document.getElementById("ReferenceMeetingReasonPreview").classList.add("disabled");
    } else {
        document.getElementById("ReferenceMeetingReasonPreview").innerHTML = "";   
        document.getElementById("ReferenceMeetingReasonPreview").contentEditable = false; 
        document.getElementById("ReferenceMeetingReasonPreview").classList.remove("disabled"); 
    }

    //Field 1.2
    var F12Value = document.getElementById("SummonsOrRejectSelected").innerHTML;
    document.getElementById("SummonsOrRejectPreview").innerHTML = F12Value;

    //Field 1.3
    var F13Value = document.getElementById("MeetingTypeSelected").innerHTML;
    document.getElementById("MeetingTypePreview").innerHTML = F13Value;

    //Field 1.4
    var F14Value = document.getElementById("MeetingDaySelected").innerHTML;
    document.getElementById("MeetingDayPreview").innerHTML = F14Value;
    
    //Field 1.7
    document.getElementById("MeetingAddressPreview").innerHTML = document.getElementById("MeetingAddress").innerHTML; 
    
    //Field 1.8
    document.getElementById("ReasonsForEarlierDateOfConveningPreview").innerHTML = document.getElementById("ReasonsForEarlierDateOfConvening").innerHTML; 
    
    //Field 2.1
    document.getElementById("SecurityNumberPreview").value = document.getElementById("SecurityNumber").value;

    //Field 2.CB
    if(document.getElementById("cbx").checked){
        document.getElementById("cbx-preview").checked = true;
    } else {
        document.getElementById("cbx-preview").checked = false;
    }

    //Field 2.2
    document.getElementById("SecurityNamePreview").value = document.getElementById("SecurityName").value;

    //Field 2.3
    /* var F23Value = document.getElementById("MeetingCompanyNameListSelected").innerHTML;
    document.getElementById("MeetingCompanyNameListPreview").innerHTML = F23Value; */

    //Field 2.4
    document.getElementById("MeetingCompanyNamePreview").value = document.getElementById("MeetingCompanyName").innerHTML; 

    //Field 2.5
    var F25Value = document.getElementById("MeetingCompanyIdTypeSelected").innerHTML;
    document.getElementById("MeetingCompanyIdTypePreview").innerHTML = F25Value;

    //Field 2.6
    document.getElementById("ReportedOnEntityIDPreview").value = document.getElementById("ReportedOnEntityID").value;

    //Field 2.7
    var F27Value = document.getElementById("SecurityTypeSelected").innerHTML;
    document.getElementById("SecurityTypePreview").innerHTML = F27Value;

    //Row1 Table - Field 3.1
    document.getElementById("ItemSubjectPreview").innerHTML = document.getElementById("ItemSubject").innerHTML; 
    //Field 3.2
    var F32Value = document.getElementById("IsItemForVotingSelected").innerHTML;
    document.getElementById("IsItemForVotingPreview").innerHTML = F32Value;
    //Field 3.3
    var F32Value = document.getElementById("MajorityRequiredSelected").innerHTML;
    document.getElementById("MajorityRequiredPreview").innerHTML = F32Value;

    //Row2 Table - Field 3.4
    document.getElementById("ItemSubject2Preview").innerHTML = document.getElementById("ItemSubject2").innerHTML; 
    //Field 3.5
    var F35Value = document.getElementById("IsItemForVoting2Selected").innerHTML;
    document.getElementById("IsItemForVoting2Preview").innerHTML = F35Value;
    //Field 3.6
    var F36Value = document.getElementById("MajorityRequired2Selected").innerHTML;
    document.getElementById("MajorityRequired2Preview").innerHTML = F36Value;

    //Row3 Table - Field 3.7
    document.getElementById("ItemSubject3Preview").innerHTML = document.getElementById("ItemSubject3").innerHTML; 
    //Field 3.8
    var F38Value = document.getElementById("IsItemForVoting3Selected").innerHTML;
    document.getElementById("IsItemForVoting3Preview").innerHTML = F38Value;
    //Field 3.9
    var F39Value = document.getElementById("MajorityRequired3Selected").innerHTML;
    document.getElementById("MajorityRequired3Preview").innerHTML = F39Value;

    //Field 3.File
    var path = document.getElementById("DetailedTopicsFile").value;
    if(path == ''){
        document.getElementById("file1").classList.add("hide");
        var fileName = "---";
    } else {
        var fileName = getFileName(path);
        document.getElementById("DetailedTopicsFilePreview").innerHTML = fileName;
        document.getElementById("file1").classList.remove("hide");
    }
    
    //Field 4.1
    var F41Value = document.getElementById("IncludesVotingFileSelected").innerHTML;
    document.getElementById("IncludesVotingFilePreview").innerHTML = F41Value; 
    
    //Field 4.2
    var F42Value = document.getElementById("IncludesPositionFileSelected").innerHTML;
    document.getElementById("IncludesPositionFilePreview").innerHTML = F42Value; 


    //Field 4.3 - File2
    var path = document.getElementById("VotingFile").value;
    if(path == ''){
        document.getElementById("file2").classList.add("hide");
        var fileName = "---";
    } else {
        var fileName = getFileName(path);
        document.getElementById("VotingFilePreview").innerHTML = fileName;
        document.getElementById("file2").classList.remove("hide");
    }

    //Field 4.4
    var F44Value = document.getElementById("IncludesAppointmentDeclarationSelected").innerHTML;
    document.getElementById("IncludesAppointmentDeclarationPreview").innerHTML = F44Value;

    //Field 4.5
    var F45Value = document.getElementById("IncludesCorrectedDeedOfTrustSelected").innerHTML;
    document.getElementById("IncludesCorrectedDeedOfTrustPreview").innerHTML = F45Value;

    //Field 4.6
    var F46Value = document.getElementById("IncludesApprovalRequestSelected").innerHTML;
    document.getElementById("IncludesApprovalRequestPreview").innerHTML = F46Value;

    //Field 4.7
    var F47Value = document.getElementById("IncludesOtherFileSelected").innerHTML;
    document.getElementById("IncludesOtherFilePreview").innerHTML = F47Value;

    //Field 4.8
    document.getElementById("OtherFileDetailsPreview").innerHTML = document.getElementById("OtherFileDetails").innerHTML;
    
    //Field 4.9 - File3
    var path = document.getElementById("Field117File").value;
    if(path == ''){
        document.getElementById("file3").classList.add("hide");
        var fileName = "---";
    } else {
        var fileName = getFileName(path);
        document.getElementById("Field117FilePreview").innerHTML = fileName;
        document.getElementById("file3").classList.remove("hide");
    }

    //Field 5.1
    document.getElementById("ValidQuorumConditionPreview").innerHTML = document.getElementById("ValidQuorumCondition").innerHTML;

    //Field 5.2 - Radio 1
    if(document.getElementById("RB_MeetingHeldOn").checked){
        document.getElementById("RB_MeetingHeldOnPreview").checked = true;
        document.getElementById("RB_MeetingHeldOnPreview").classList.add("radioPreviewChecked");
    } else {
        document.getElementById("RB_MeetingHeldOnPreview").checked = false;
        document.getElementById("RB_MeetingHeldOnPreview").classList.remove("radioPreviewChecked");
    }

    //Field 5.6 - Radio 2
    if(document.getElementById("RB_MeetingCancel").checked){
        document.getElementById("RB_MeetingCancelPreview").checked = true;
        document.getElementById("RB_MeetingCancelPreview").classList.add("radioPreviewChecked");
    } else {
        document.getElementById("RB_MeetingCancelPreview").checked = false;
        document.getElementById("RB_MeetingCancelPreview").classList.remove("radioPreviewChecked");
    }

    //Field 5.5
    document.getElementById("QuorumPostponedMeetingAddressPreview").innerHTML = document.getElementById("QuorumPostponedMeetingAddress").innerHTML;

    //Field 5.7
    document.getElementById("MeetingExtraInformationPreview").innerHTML = document.getElementById("MeetingExtraInformation").innerHTML;

    //Field 5.8
    document.getElementById("UniqueMeetingProofIdPreview").value = document.getElementById("UniqueMeetingProofId").value;

    //Field 1 - Footer
    document.getElementById("TextHofshiPreview").innerHTML = document.getElementById("TextHofshi").innerHTML;

    //Field 2-3-4 - Footer
    document.getElementById("FooterProofNum1Preview").value = document.getElementById("FooterProofNum1").value;
    document.getElementById("FooterProofNum2Preview").value = document.getElementById("FooterProofNum2").value;
    document.getElementById("FooterProofNum3Preview").value = document.getElementById("FooterProofNum3").value;


    modal.classList.add('show');
}

span.onclick = function() {
  modal.classList.remove('show');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show');
  }
}

function getFileName(path) {
    var parts = path.split("\\");
    return parts[parts.length - 1];
  }