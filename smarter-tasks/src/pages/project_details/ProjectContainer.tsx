import { useMembersDispatch } from '../../context/members/context';
import { fetchMembers } from '../../context/members/actions';

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useMembersDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};

export default ProjectContainer;
