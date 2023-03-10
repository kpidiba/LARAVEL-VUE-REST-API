import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

export default function useSkills() {
  const skills = ref([]);
  const skill = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getSkills = async () => {
    const response = await axios.get("skills");
    skills.value = response.data.data;
  };

  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    skill.value = response.data.data;
  };

  const storeSkill = async (data) => {
    try {
      await axios.post("skills", data);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateSkill = async (id) => {
    try {
      await axios.put("skills/" + id, skill.value);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroySkill = async (id) => {
    try {
      if (!window.confirm("Are Sure to delete this Skill")) return;
      await axios.delete("skills/" + id);
      await getSkills();
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
      console.log(error);
    }
  };

  return {
    skill,
    skills,
    getSkill,
    getSkills,
    storeSkill,
    updateSkill,
    destroySkill,
    errors
  };
}
