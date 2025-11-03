import React, { useState, useEffect } from "react";
import MainWidth from "../../components/layout/MainWidth";
import InputBox from "../../components/ui/InputBox";
import { useForm } from "react-hook-form";
import {
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import TextareaBox from "../../components/ui/TextareaBox";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useNavigate } from "react-router";

const CreateWord = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { wordId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const isEditMode = Boolean(wordId);

  useEffect(() => {
    if (isEditMode) {
      const fetchWord = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/word/${wordId}`
          );
          const word = response.data.data;
          setValue("word", word.word);
          setValue("meanings", word.meanings.join(", "));
          setValue("description", word.description);
        } catch (error) {
          console.error("Error fetching word:", error);
          toast.error("Failed to load word data.");
        }
      };
      fetchWord();
    }
  }, [isEditMode, wordId, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      if (isEditMode) {
        await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/word/update/${wordId}`,
          data
        );
        toast.success("Successfully updated!");
        navigate("/collection");
      } else {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/word/create`,
          data
        );
        toast.success("Successfully created!");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10 flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <MainWidth>
        <div className="md:w-[800px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-istok font-bold text-2xl text-center">
              {isEditMode ? "Modify Your Vocabulary" : "Create a New Vocabulary"}
            </h1>
            <p className="font-istok font-medium text-gray-500 text-center">
              Complete the fields you want to save for the specific word
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="flex flex-col mt-4">
              <InputBox
                id="word"
                name="word"
                label="Word"
                placeholder="Type your word"
                icon={BookOpenIcon}
                error={errors.word?.message}
                {...register("word", { required: "Word is required" })}
              />
            </div>
            <div className="flex flex-col mt-4">
              <InputBox
                id="meanings"
                name="meanings"
                label="Meanings"
                placeholder="Type meanings sperated by comma"
                icon={ChatBubbleLeftRightIcon}
                error={errors.meanings?.message}
                {...register("meanings", {
                  required: "Meanings are required",
                })}
              />
            </div>
            <div className="flex flex-col mt-4">
              <TextareaBox
                id="description"
                name="description"
                label="Description"
                placeholder="e.g. usages of the word, why its invented, different purchase etc"
                icon={PencilIcon}
                error={errors.description?.message}
                optional={true}
                {...register("description")}
              />
            </div>
            <div className="flex justify-end mt-4 gap-4">
              {isEditMode && (
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="bg-gray-300 text-gray-800 font-istok font-bold px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="bg-indigo-600 text-white font-istok font-bold px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? isEditMode
                    ? "Updating..."
                    : "Creating..."
                  : isEditMode
                  ? "Update"
                  : "Create Word"}
              </button>
            </div>
          </form>
        </div>
      </MainWidth>
    </div>
  );
};

export default CreateWord;
