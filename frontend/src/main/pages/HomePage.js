import BasicLayout from "main/layouts/BasicLayout/BasicLayout";

export default function HomePage() {
  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>demo-react-example</h1>
        <p>
          This is a sample React webapp that can be deployed on GitHub Pages,
          since it has no backend.
        </p>
      </div>
    </BasicLayout>
  )
}