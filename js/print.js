var btn = document.getElementById("printBtn");
window.onafterprint = afterPrint;

btn.onclick = function() {

    //Date Fields
    //Field 1.1
    document.getElementById("ConveningDecisionDatePrint").value = ConveningDecisionDateField.value;

    //Field 1.5
    document.getElementById("MeetingDatePrint").value = MeetingDateField.value;

    //Field 1.6
    document.getElementById("MeetingTimePrint").value = MeetingTimeField.value;

    //Field 2.8
    document.getElementById("MeetingEffectiveDatePrint").value = MeetingEffectiveDateField.value;

    //Field 5.3
    document.getElementById("QuorumPostponedMeetingDatePrint").value = QuorumPostponedMeetingDateField.value;

    //Field 5.4
    document.getElementById("QuorumPostponedMeetingTimePrint").value = QuorumPostponedMeetingTimeField.value;

    //Paragraph 0    
    //Field 0.1
  if(!document.getElementById("sizeWeight").checked && !document.getElementById("sizeDimensions").checked){
    /* document.getElementById("toggle-label-yes").classList.add('dualRadioUnchecked');
    document.getElementById("toggle-label-no").classList.add('dualRadioUnchecked'); */
    document.getElementById("isVotingSupportedPrint").innerHTML = "---";
  } else if(document.getElementById("sizeDimensions").checked){
    document.getElementById("isVotingSupportedPrint").innerHTML = "לא";
    /* document.getElementById("toggle-label-no").classList.add('dualRadioChecked');
    document.getElementById("toggle-label-no").classList.remove('dualRadioUnchecked');
    document.getElementById("toggle-label-yes").classList.add('dualRadioUnchecked');
    document.getElementById("toggle-label-yes").classList.remove('dualRadioChecked'); */
  } else if(document.getElementById("sizeWeight").checked){
    document.getElementById("isVotingSupportedPrint").innerHTML = "כן";
    /* document.getElementById("toggle-label-no").classList.add('dualRadioUnchecked');
    document.getElementById("toggle-label-yes").classList.add('dualRadioChecked');
    document.getElementById("toggle-label-no").classList.remove('dualRadioChecked');
    document.getElementById("toggle-label-yes").classList.remove('dualRadioUnchecked'); */
  }

    //Field 0.2
    var F02Value = document.getElementById("MeetingReportTypeSelected").innerHTML;
    document.getElementById("MeetingReportTypePrint").innerHTML = F02Value;
  
    //Field 0.3
    document.getElementById("ReferenceNumPrint").value = document.getElementById("ReferenceNum").value;

    //Field 0.5
    var F05Value = document.getElementById("RejectionReasonSelected").innerHTML;
    document.getElementById("RejectionReasonPrint").innerHTML = F05Value;
    
    //Field 0.6
    if(document.getElementById("RejectionReasonSelected").innerHTML === "אחר"){
        document.getElementById("ReferenceMeetingReasonPrint").innerHTML = document.getElementById("ReferenceMeetingReason").innerHTML;   
        document.getElementById("ReferenceMeetingReasonPrint").contentEditable = true; 
        document.getElementById("ReferenceMeetingReasonPrint").classList.add("disabled");
    } else {
        document.getElementById("ReferenceMeetingReasonPrint").innerHTML = "";   
        document.getElementById("ReferenceMeetingReasonPrint").contentEditable = false; 
        document.getElementById("ReferenceMeetingReasonPrint").classList.remove("disabled"); 
    }

    //Field 1.2
    var F12Value = document.getElementById("SummonsOrRejectSelected").innerHTML;
    document.getElementById("SummonsOrRejectPrint").innerHTML = F12Value;

    //Field 1.3
    var F13Value = document.getElementById("MeetingTypeSelected").innerHTML;
    document.getElementById("MeetingTypePrint").innerHTML = F13Value;

    //Field 1.4
    var F14Value = document.getElementById("MeetingDaySelected").innerHTML;
    document.getElementById("MeetingDayPrint").innerHTML = F14Value;
    
    //Field 1.7
    document.getElementById("MeetingAddressPrint").innerHTML = document.getElementById("MeetingAddress").innerHTML; 
    
    //Field 1.8
    document.getElementById("ReasonsForEarlierDateOfConveningPrint").innerHTML = document.getElementById("ReasonsForEarlierDateOfConvening").innerHTML; 
    
    //Field 2.1
    document.getElementById("SecurityNumberPrint").value = document.getElementById("SecurityNumber").value;

    //Field 2.CB
    if(document.getElementById("cbx").checked){
        document.getElementById("cbx-Print").checked = true;
    } else {
        document.getElementById("cbx-Print").checked = false;
    }

    //Field 2.2
    document.getElementById("SecurityNamePrint").value = document.getElementById("SecurityName").value;

    //Field 2.3
    /* var F23Value = document.getElementById("MeetingCompanyNameListSelected").innerHTML;
    document.getElementById("MeetingCompanyNameListPrint").innerHTML = F23Value; */

    //Field 2.4
    document.getElementById("MeetingCompanyNamePrint").value = document.getElementById("MeetingCompanyName").innerHTML; 

    //Field 2.5
    var F25Value = document.getElementById("MeetingCompanyIdTypeSelected").innerHTML;
    document.getElementById("MeetingCompanyIdTypePrint").innerHTML = F25Value;

    //Field 2.6
    document.getElementById("ReportedOnEntityIDPrint").value = document.getElementById("ReportedOnEntityID").value;

    //Field 2.7
    var F27Value = document.getElementById("SecurityTypeSelected").innerHTML;
    document.getElementById("SecurityTypePrint").innerHTML = F27Value;

    //Row1 Table - Field 3.1
    document.getElementById("ItemSubjectPrint").innerHTML = document.getElementById("ItemSubject").innerHTML; 
    //Field 3.2
    var F32Value = document.getElementById("IsItemForVotingSelected").innerHTML;
    document.getElementById("IsItemForVotingPrint").innerHTML = F32Value;
    //Field 3.3
    var F32Value = document.getElementById("MajorityRequiredSelected").innerHTML;
    document.getElementById("MajorityRequiredPrint").innerHTML = F32Value;

    //Row2 Table - Field 3.4
    document.getElementById("ItemSubject2Print").innerHTML = document.getElementById("ItemSubject2").innerHTML; 
    //Field 3.5
    var F35Value = document.getElementById("IsItemForVoting2Selected").innerHTML;
    document.getElementById("IsItemForVoting2Print").innerHTML = F35Value;
    //Field 3.6
    var F36Value = document.getElementById("MajorityRequired2Selected").innerHTML;
    document.getElementById("MajorityRequired2Print").innerHTML = F36Value;

    //Row3 Table - Field 3.7
    document.getElementById("ItemSubject3Print").innerHTML = document.getElementById("ItemSubject3").innerHTML; 
    //Field 3.8
    var F38Value = document.getElementById("IsItemForVoting3Selected").innerHTML;
    document.getElementById("IsItemForVoting3Print").innerHTML = F38Value;
    //Field 3.9
    var F39Value = document.getElementById("MajorityRequired3Selected").innerHTML;
    document.getElementById("MajorityRequired3Print").innerHTML = F39Value;

    //Field 3.File
    var path = document.getElementById("DetailedTopicsFile").value;
    if(path == ''){
        document.getElementById("file1Print").classList.add("hide");
        var fileName = "---";
    } else {
        var fileName = getFileName(path);
        document.getElementById("DetailedTopicsFilePrint").innerHTML = fileName;
        document.getElementById("file1Print").classList.remove("hide");
    }
    
    //Field 4.1
    var F41Value = document.getElementById("IncludesVotingFileSelected").innerHTML;
    document.getElementById("IncludesVotingFilePrint").innerHTML = F41Value; 
    
    //Field 4.2
    var F42Value = document.getElementById("IncludesPositionFileSelected").innerHTML;
    document.getElementById("IncludesPositionFilePrint").innerHTML = F42Value; 


    //Field 4.3 - File2
    var path = document.getElementById("VotingFile").value;
    if(path == ''){
        document.getElementById("file2Print").classList.add("hide");
        var fileName = "---";
    } else {
        var fileName = getFileName(path);
        document.getElementById("VotingFilePrint").innerHTML = fileName;
        document.getElementById("file2Print").classList.remove("hide");
    }

    //Field 4.4
    var F44Value = document.getElementById("IncludesAppointmentDeclarationSelected").innerHTML;
    document.getElementById("IncludesAppointmentDeclarationPrint").innerHTML = F44Value;

    //Field 4.5
    var F45Value = document.getElementById("IncludesCorrectedDeedOfTrustSelected").innerHTML;
    document.getElementById("IncludesCorrectedDeedOfTrustPrint").innerHTML = F45Value;

    //Field 4.6
    var F46Value = document.getElementById("IncludesApprovalRequestSelected").innerHTML;
    document.getElementById("IncludesApprovalRequestPrint").innerHTML = F46Value;

    //Field 4.7
    var F47Value = document.getElementById("IncludesOtherFileSelected").innerHTML;
    document.getElementById("IncludesOtherFilePrint").innerHTML = F47Value;

    //Field 4.8
    document.getElementById("OtherFileDetailsPrint").innerHTML = document.getElementById("OtherFileDetails").innerHTML;
    
    //Field 4.9 - File3
    var path = document.getElementById("Field117File").value;
    if(path == ''){
        document.getElementById("file3Print").classList.add("hide");
        var fileName = "---";
    } else {
        var fileName = getFileName(path);
        document.getElementById("Field117FilePrint").innerHTML = fileName;
        document.getElementById("file3Print").classList.remove("hide");
    }

    //Field 5.1
    document.getElementById("ValidQuorumConditionPrint").innerHTML = document.getElementById("ValidQuorumCondition").innerHTML;

    //Field 5.2 - Radio 1
    if(document.getElementById("RB_MeetingHeldOn").checked){
        document.getElementById("RB_MeetingHeldOnPrint").checked = true;
        document.getElementById("RB_MeetingHeldOnPrint").classList.add("radioPreviewChecked");
    } else {
        document.getElementById("RB_MeetingHeldOnPrint").checked = false;
        document.getElementById("RB_MeetingHeldOnPrint").classList.remove("radioPreviewChecked");
    }

    //Field 5.6 - Radio 2
    if(document.getElementById("RB_MeetingCancel").checked){
        document.getElementById("RB_MeetingCancelPrint").checked = true;
        document.getElementById("RB_MeetingCancelPrint").classList.add("radioPreviewChecked");
    } else {
        document.getElementById("RB_MeetingCancelPrint").checked = false;
        document.getElementById("RB_MeetingCancelPrint").classList.remove("radioPreviewChecked");
    }

    //Field 5.5
    document.getElementById("QuorumPostponedMeetingAddressPrint").innerHTML = document.getElementById("QuorumPostponedMeetingAddress").innerHTML;

    //Field 5.7
    document.getElementById("MeetingExtraInformationPrint").innerHTML = document.getElementById("MeetingExtraInformation").innerHTML;

    //Field 5.8
    document.getElementById("UniqueMeetingProofIdPrint").value = document.getElementById("UniqueMeetingProofId").value;

    //Field 1 - Footer
    document.getElementById("TextHofshiPrint").innerHTML = document.getElementById("TextHofshi").innerHTML;

    //Field 2-3-4 - Footer
    document.getElementById("FooterProofNum1Print").value = document.getElementById("FooterProofNum1").value;
    document.getElementById("FooterProofNum2Print").value = document.getElementById("FooterProofNum2").value;
    document.getElementById("FooterProofNum3Print").value = document.getElementById("FooterProofNum3").value;

    document.getElementById("sideBarPannel").style.display = "none";
    document.getElementById("appSection").style.display = "none";
    document.getElementById("printPage").style.display = "block";

    window.print();
}

function getFileName(path) {
    var parts = path.split("\\");
    return parts[parts.length - 1];
  }

function afterPrint(){
    document.getElementById("printPage").style.display = "none";
    document.getElementById("sideBarPannel").style.display = "block";
    document.getElementById("appSection").style.display = "block";
}