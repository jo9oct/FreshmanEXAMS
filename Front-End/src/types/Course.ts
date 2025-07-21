
export type course = {
    CourseCode:string;
    CourseTitle: string;
    CourseDescription: string;
    TotalChapter:number;
    _id:string;
};
  
export type Chapter = {
    ChapterNumber: number;
    ChapterTitle: string;
    ChapterDescription: string;
    _id: string;
}
  
export type Course = {
    CourseCode: string;
    Chapters: Chapter[];
}