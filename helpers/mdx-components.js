// import CodeSnippet from "@/components/CodeSnippet";
// import DivisionGroupsDemo from "@/components/DivisionGroupsDemo";
// import CircularColorsDemo from "@/app/components/CircularColorsDemo";
import NotesBox from "../components/NotesBox";
import CodeSnippet from "../components/CodeSnippet";
import Image from "../components/Images";
import PDF from "../components/PDF";
import { AlgorithmSteps, Step } from "../components/AlgorithmSteps";

const COMPONENT_MAP = {
  pre: CodeSnippet,
  NotesBox: NotesBox,
  Image,
  PDF,
  AlgorithmSteps,
  Step,
  //   DivisionGroupsDemo,
  // CircularColorsDemo,
};

export default COMPONENT_MAP;
