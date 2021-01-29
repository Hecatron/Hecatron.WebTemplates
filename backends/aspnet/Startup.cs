using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace site_aspnet {

    /// <summary> Startup Class. </summary>
    public class Startup {

        /// <summary> Constructor. </summary>
        /// <param name="configuration"> The configuration. </param>
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        /// <summary> Gets the configuration. </summary>
        /// <value> The configuration. </value>
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
            else {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            // This can be used to force redirect http:// to https://
            app.UseHttpsRedirection();
            // Make sure to pull in content from wwwroot
            app.UseStaticFiles();
            // Add routing to figure out where to send pages
            app.UseRouting();
            // Setup Authentication / Authorization
            //app.UseAuthorization();
            // Setup endpoints
            app.UseEndpoints(endpoints => {
                // Add in Razor pages under Pages subdir
                endpoints.MapRazorPages();
            });
        }
    }
}
