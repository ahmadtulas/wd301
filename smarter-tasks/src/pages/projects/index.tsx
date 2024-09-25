import ProjectList from './ProjectList';
import NewProject from './NewProject';
const Projects = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>Projects...</h2>
        <ProjectList />
      </div>
      <div style={{ marginLeft: '20px', width: '300px' }}>
        <NewProject />
      </div>
    </div>
  );
};
export default Projects;
